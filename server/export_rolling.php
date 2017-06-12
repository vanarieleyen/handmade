<?php

// export the selected data to an excel file
// use xhr call to use this (filesaver.js)

require_once realpath($_SERVER['DOCUMENT_ROOT']).'/ajax/Classes/pdo.php';
require_once realpath($_SERVER['DOCUMENT_ROOT']).'/ajax/Classes/PHPExcel.php';
require_once realpath($_SERVER['DOCUMENT_ROOT']).'/ajax/language.php';

set_time_limit(0);

date_default_timezone_set('Asia/Chongqing');

extract($_GET);

$database = new Database();

// make sure utf8 is stored and retrieved correctly
$database->beginTransaction();
$database->query("SET NAMES 'utf8'");
$database->execute();
$database->query("SET lc_time_names = 'zh_CN'");
$database->execute();

// get the data
$query = sprintf("SELECT t1.*, t1.name AS sampling, DATE(t1.date) AS datum, t2.* FROM gwc_handmade.rolling t1
								JOIN gwc_handmade.specs t2 ON t2.name=t1.product AND (DATE(t1.date) BETWEEN DATE(t2.start) AND DATE(t2.end))
								WHERE DATE(t1.date) BETWEEN '%s' AND '%s' ORDER BY t1.date ", $start, $end);
$database->query($query);
$rows = $database->resultset();

// create records for the sheets (one for each product)
$record = array();
foreach ($rows AS $row) {
	$key = '#tab_'.$row['product'];
	if (array_key_exists($key, $record) ) {
	 	array_push($record[$key], $row);
	} else {
		$record[$key] = array($row);
	}
}

$database->endTransaction();

// Create new PHPExcel object
$objPHPExcel = new PHPExcel();

// generate excel column names (A,B,C..Z  AA,AB..)
function num2alpha($n) {
  for($r = ""; $n >= 0; $n = intval($n / 26) - 1)
     $r = chr($n%26 + 0x41) . $r;
  return $r;
}

// set the color for a range of fields and set a small border
function setColor($sheet, $range, $color) {
	$style = array(
		'borders' => array(
			'allborders' => array('style' => PHPExcel_Style_Border::BORDER_HAIR)
		),
  		'fill' => array(
			'type' => PHPExcel_Style_Fill::FILL_SOLID,
			'color' => array('rgb' => $color)
		)
	);
	$sheet->getStyle($range)->applyFromArray($style);
}

// border style
$thinborder = array(
  'borders' => array(
  	'outline' => array(
      'style' => PHPExcel_Style_Border::BORDER_THIN
    )
  )
);

// sets a value of a cell
function setCell($sheet, $row, $col, $data) {
	$cell = sprintf("%s%d", num2alpha($col), $row);
	$sheet->setCellValue( $cell, $data );
}

define(BLUE, '99CCFF');
define(YELLOW, 'FFFF00');

foreach ($record AS $row) {		// walk through all the products/sheets
	$sheet = $objPHPExcel->createSheet();

	$sheet->setTitle($row[0]['product']);

	$sheet->getStyle('A:AP')->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
	$sheet->getStyle('A:AP')->getAlignment()->setVertical(PHPExcel_Style_Alignment::VERTICAL_CENTER);
	$sheet->freezePane( "A6" );
	
	$aantal = count($row);	// the number of records for the current product
	
	// set title and sheet code
	$sheet->setCellValue("A1", "手  工  雪  茄  卷  制  上  茄  衣  过  程  质  量  检  验  记  录  及  考  核  表")->mergeCells("A1:AA2");
	$sheet->mergeCells("AA1:AP2");
	$sheet->setCellValue("A3", "卷胚过程")->mergeCells("A3:B3");					// rolling process
	$sheet->setCellValue("C3", "产品质量情况")->mergeCells("C3:Z3");
	$sheet->setCellValue("AA3", "统计数据")->mergeCells("AA3:AL3");
	$sheet->setCellValue("AM3", "批次 得分")->mergeCells("AM3:AM5");			// batch score
	$sheet->setCellValue("AN3", "批次 质量判定")->mergeCells("AN3:AN5");		// batch quality
	$sheet->setCellValue("AO3", "检验员")->mergeCells("AO3:AO5");					// inspector
	$sheet->setCellValue("AP3", "备注")->mergeCells("AP3:AP5");					// remark
	$sheet->setCellValue("A4", "生产日期")->mergeCells("A4:A5");					// date
	$sheet->setCellValue("B4", "抽样点")->mergeCells("B4:B5");						// sampling point
	$sheet->setCellValue("C4", "长度（mm）")->mergeCells("C4:G4");				// length
	$sheet->setCellValue("H4", "圆周/直径（mm）")->mergeCells("H4:L4");		// circumference
	$sheet->setCellValue("M4", "质量(g)")->mergeCells("M4:Q4");					// weight
	$sheet->setCellValue("R4", "吸阻(mmWg)")->mergeCells("R4:V4");				// pd
	$sheet->setCellValue("W4", "表面（支）");															// surface out of specs
	$sheet->setCellValue("X4", "松紧度（支）");														// tightness out of specs
	$sheet->setCellValue("Y4", "配方 精度%");															// blend accuracy
	$sheet->setCellValue("Z4", "吸阻合格率%");														// pd accuracy
	$sheet->setCellValue("AA4", "长度偏小次数")->mergeCells("AA4:AA5");
	$sheet->setCellValue("AB4", "长度偏大次数")->mergeCells("AB4:AB5");
	$sheet->setCellValue("AC4", "长度合格次数")->mergeCells("AC4:AC5");
	$sheet->setCellValue("AD4", "圆周偏小次数")->mergeCells("AD4:AD5");
	$sheet->setCellValue("AE4", "圆周偏大次数")->mergeCells("AE4:AE5");
	$sheet->setCellValue("AF4", "圆周合格次数")->mergeCells("AF4:AF5");
	$sheet->setCellValue("AG4", "质量偏小次数")->mergeCells("AG4:AG5");
	$sheet->setCellValue("AH4", "质量偏大次数")->mergeCells("AH4:AH5");
	$sheet->setCellValue("AI4", "质量合格次数")->mergeCells("AI4:AI5");
	$sheet->setCellValue("AJ4", "吸阻偏小次数")->mergeCells("AJ4:AJ5");
	$sheet->setCellValue("AK4", "吸阻偏大次数")->mergeCells("AK4:AK5");
	$sheet->setCellValue("AL4", "吸阻合格次数")->mergeCells("AL4:AL5");
	$sheet->setCellValue("C5", $row[0]['rol_l_min'])->mergeCells("C5:D5");
	$sheet->setCellValue("E5", "-");
	$sheet->setCellValue("F5", $row[0]['rol_l_max'])->mergeCells("F5:G5");
	$sheet->setCellValue("H5", $row[0]['rol_c_min'])->mergeCells("H5:I5");
	$sheet->setCellValue("J5", "-");
	$sheet->setCellValue("K5", $row[0]['rol_c_max'])->mergeCells("K5:L5");
	$sheet->setCellValue("M5", $row[0]['rol_w_min'])->mergeCells("M5:N5");
	$sheet->setCellValue("O5", "-");
	$sheet->setCellValue("P5", $row[0]['rol_w_max'])->mergeCells("P5:Q5");
	$sheet->setCellValue("R5", $row[0]['rol_p_min'])->mergeCells("R5:S5");
	$sheet->setCellValue("T5", "-");
	$sheet->setCellValue("U5", $row[0]['rol_p_max'])->mergeCells("U5:V5");
	$sheet->setCellValue("W5", "标准");
	$sheet->setCellValue("X5", "标准");
	$sheet->setCellValue("Y5", $row[0]['rol_blendacc_max']);
	$sheet->setCellValue("Z5", $row[0]['rol_pdacc_max']);
	
	for ($i=0, $r=6; $i<$aantal; $i++, $r+=2) {
		$sheet->setCellValue("A".$r, $row[$i]['datum'])->mergeCells(sprintf("A%d:A%d",$r, $r+1));
		$sheet->setCellValue("B".$r, $row[$i]['sampling'])->mergeCells(sprintf("B%d:B%d",$r, $r+1));
		
		for ($g=0; $g<10; $g++) {	
			setCell($sheet, $r+ ($g % 2), 2 + ($g % 5), $row[$i]['l'.($g+1)]);	// length
			setCell($sheet, $r+ ($g % 2), 7 + ($g % 5), $row[$i]['c'.($g+1)]);	// circumference
			setCell($sheet, $r+ ($g % 2), 12+ ($g % 5), $row[$i]['w'.($g+1)]);	// weight
			setCell($sheet, $r+ ($g % 2), 17+ ($g % 5), $row[$i]['l'.($g+1)]);	// pd
		}
		$sheet->getStyle(sprintf('C%d:G%d', $r, $r+1))->applyFromArray($thinborder);
		$sheet->getStyle(sprintf('H%d:L%d', $r, $r+1))->applyFromArray($thinborder);
		$sheet->getStyle(sprintf('M%d:Q%d', $r, $r+1))->applyFromArray($thinborder);
		$sheet->getStyle(sprintf('R%d:V%d', $r, $r+1))->applyFromArray($thinborder);
		
		$sheet->setCellValue("W".$r, $row[$i]['surfout'])->mergeCells(sprintf("W%d:W%d",$r, $r+1));
		$sheet->setCellValue("X".$r, $row[$i]['tightout'])->mergeCells(sprintf("X%d:X%d",$r, $r+1));
		$sheet->setCellValue("Y".$r, $row[$i]['blendacc'])->mergeCells(sprintf("Y%d:Y%d",$r, $r+1));
		$sheet->setCellValue("Z".$r, $row[$i]['pdacc'])->mergeCells(sprintf("Z%d:Z%d",$r, $r+1));
		
		$sheet->setCellValue("AM".$r, $row[$i]['score'])->mergeCells(sprintf("AM%d:AM%d",$r, $r+1));
		$sheet->setCellValue("AN".$r, $row[$i]['quality'])->mergeCells(sprintf("AN%d:AN%d",$r, $r+1));
		$sheet->setCellValue("AO".$r, $row[$i]['inspector'])->mergeCells(sprintf("AO%d:AO%d",$r, $r+1));
		$sheet->setCellValue("AP".$r, $row[$i]['remarks'])->mergeCells(sprintf("AP%d:AP%d",$r, $r+1));

		// formulas
		$formula = sprintf('=countif(C%d:G%d,"<"&$C$5)', $r, $r+1);
		$sheet->setCellValue("AA".$r, $formula)->mergeCells(sprintf("AA%d:AA%d",$r, $r+1));

		$formula = sprintf('=countif(C%d:G%d,">"&$F$5)', $r, $r+1);
		$sheet->setCellValue("AB".$r, $formula)->mergeCells(sprintf("AB%d:AB%d",$r, $r+1));

		$formula = sprintf('=countif(C%d:G%d,">="&$C$5)-countif(C%d:G%d,">"&$F$5)', $r, $r+1, $r, $r+1);
		$sheet->setCellValue("AC".$r, $formula)->mergeCells(sprintf("AC%d:AC%d",$r, $r+1));

		$formula = sprintf('=countif(H%d:L%d,"<"&$H$5)', $r, $r+1);
		$sheet->setCellValue("AD".$r, $formula)->mergeCells(sprintf("AD%d:AD%d",$r, $r+1));
		
		$formula = sprintf('=countif(H%d:L%d,">"&$K$5)', $r, $r+1);
		$sheet->setCellValue("AE".$r, $formula)->mergeCells(sprintf("AE%d:AE%d",$r, $r+1));
		
		$formula = sprintf('=countif(H%d:L%d,">="&$H$5)-countif(H%d:L%d,">"&$K$5)', $r, $r+1, $r, $r+1);
		$sheet->setCellValue("AF".$r, $formula)->mergeCells(sprintf("AF%d:AF%d",$r, $r+1));
		
		$formula = sprintf('=countif(M%d:Q%d,"<"&$M$5)', $r, $r+1);
		$sheet->setCellValue("AG".$r, $formula)->mergeCells(sprintf("AG%d:AG%d",$r, $r+1));
		
		$formula = sprintf('=countif(M%d:Q%d,">"&$P$5)', $r, $r+1);
		$sheet->setCellValue("AH".$r, $formula)->mergeCells(sprintf("AH%d:AH%d",$r, $r+1));
		
		$formula = sprintf('=countif(M%d:Q%d,">="&$M$5)-countif(M%d:Q%d,">"&$P$5)', $r, $r+1, $r, $r+1);
		$sheet->setCellValue("AI".$r, $formula)->mergeCells(sprintf("AI%d:AI%d",$r, $r+1));
		
		$formula = sprintf('=countif(R%d:V%d,"<"&$R$5)', $r, $r+1);
		$sheet->setCellValue("AJ".$r, $formula)->mergeCells(sprintf("AJ%d:AJ%d",$r, $r+1));
		
		$formula = sprintf('=countif(R%d:V%d,">"&$U$5)', $r, $r+1);
		$sheet->setCellValue("AK".$r, $formula)->mergeCells(sprintf("AK%d:AK%d",$r, $r+1));
		
		$formula = sprintf('=countif(R%d:V%d,">="&$R$5)-countif(R%d:V%d,">"&$U$5)', $r, $r+1, $r, $r+1);
		$sheet->setCellValue("AL".$r, $formula)->mergeCells(sprintf("AL%d:AL%d",$r, $r+1));

	}
	
	// set the date column width
	$sheet->getColumnDimensionByColumn(0)->setAutoSize(false);
	$sheet->getColumnDimensionByColumn(0)->setWidth(12);	
		
	// set colors
	setColor($sheet, "A3:AP5", BLUE);
	setColor($sheet, "A3:B3", YELLOW);
	setColor($sheet, "AA3:AL3", YELLOW);

}

if ($objPHPExcel->getSheetCount() > 1)
	$objPHPExcel->removeSheetByIndex(0);	// remove the first (empty) sheet

// Set active sheet index to the first sheet, so Excel opens this as the first sheet
$objPHPExcel->setActiveSheetIndex(0);

$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007'); // Excel5 doesn't recognize sumproduct()

$objWriter->setPreCalculateFormulas(true);
$objWriter->save('php://output');

$objPHPExcel->__destruct();

exit;

?>