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
$query = sprintf("SELECT t1.*, DATE(t1.date) AS datum, DATE(t1.start) AS s_start, DATE(t1.end) AS s_end, t2.* 
								FROM gwc_handmade.storage t1
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

$deworm = array('无','生霉','虫蛀');

foreach ($record AS $row) {		// walk through all the products/sheets
	$sheet = $objPHPExcel->createSheet();

	$sheet->setTitle($row[0]['product']);

	$sheet->getStyle('A:AI')->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
	$sheet->getStyle('A:AI')->getAlignment()->setVertical(PHPExcel_Style_Alignment::VERTICAL_CENTER);
	$sheet->freezePane( "D6" );
	
	$aantal = count($row);	// the number of records for the current product
	
	// set title and sheet code
	$sheet->setCellValue("A1", "手 工 包 装 过 程 质 量 检 验 记 录 及 考 核 表")->mergeCells("A1:AA2");
	$sheet->mergeCells("AA1:AO2");
	$sheet->setCellValue("A3", "检验日期")->mergeCells("A3:A5");					// date
	$sheet->setCellValue("B3", "牌号")->mergeCells("B3:B5");							// brand
	$sheet->setCellValue("C3", "抽检次数")->mergeCells("C3:C5");					// sample
	$sheet->setCellValue("D3", "烟支包装质量（支）")->mergeCells("D3:O3");	// packing quality of stick
	$sheet->setCellValue("D4", "上指环")->mergeCells("D4:G4");						// ring
	$sheet->setCellValue("D5", "工号");																	// job number
	$sheet->setCellValue("E5", "缺陷类型");																// defect type
	$sheet->setCellValue("F5", "缺陷数量");																// defect amount
	$sheet->setCellValue("G5", "判定");																	// determination
	$sheet->setCellValue("H4", "上玻纸/塑纸")->mergeCells("H4:K4");				// cellophane
	$sheet->setCellValue("H5", "工号");																	// job number
	$sheet->setCellValue("I5", "缺陷类型");																// defect type
	$sheet->setCellValue("J5", "缺陷数量");																// defect amount
	$sheet->setCellValue("K5", "判定");																	// determination
	$sheet->setCellValue("L4", "上烟支套/管/木片")->mergeCells("L4:O4");		// set
	$sheet->setCellValue("L5", "工号");																	// job number
	$sheet->setCellValue("M5", "缺陷类型");																// defect type
	$sheet->setCellValue("N5", "缺陷数量");																// defect amount
	$sheet->setCellValue("O5", "判定");																	// determination
	$sheet->setCellValue("P3", "包装标识")->mergeCells("P3:Q4");					// packing mark
	$sheet->setCellValue("P5", "缺陷代码");																// defect code
	$sheet->setCellValue("Q5", "缺陷数量");																// defect amount
	$sheet->setCellValue("R3", "烟支包装过程得分")->mergeCells("R3:R5");		// stick packing score
	$sheet->setCellValue("S3", "备注")->mergeCells("S3:S5");							// stick packing remark
	
	$sheet->setCellValue("T3", "盒装质量（盒）")->mergeCells("T3:W3");			// quality of pack
	$sheet->setCellValue("T4", "盒装")->mergeCells("T4:W4");							// pack
	$sheet->setCellValue("T5", "工号");																	// job number
	$sheet->setCellValue("U5", "缺陷类型");																// defect type
	$sheet->setCellValue("V5", "缺陷数量");																// defect amount
	$sheet->setCellValue("W5", "判定");																	// determination
	$sheet->setCellValue("X3", "包装标识")->mergeCells("X3:Y4");					// packing mark
	$sheet->setCellValue("X5", "缺陷代码");																// defect code
	$sheet->setCellValue("Y5", "缺陷数量");																// defect amount
	$sheet->setCellValue("Z3", "盒装过程得分")->mergeCells("Z3:Z5");				// packing score
	$sheet->setCellValue("AA3", "备注")->mergeCells("AA3:AA5");					// packing remark
	
	$sheet->setCellValue("AB3", "条装质量（条）")->mergeCells("AB3:AE3");	// quality of sleeve
	$sheet->setCellValue("AB4", "条装")->mergeCells("AB4:AE4");					// sleeve
	$sheet->setCellValue("AB5", "工号");																	// job number
	$sheet->setCellValue("AC5", "缺陷类型");															// defect type
	$sheet->setCellValue("AD5", "缺陷数量");															// defect amount
	$sheet->setCellValue("AE5", "判定");																	// determination
	$sheet->setCellValue("AF3", "箱装质量（箱）")->mergeCells("AF3:AI3");	// quality of box
	$sheet->setCellValue("AF4", "箱装")->mergeCells("AF4:AI4");					// box
	$sheet->setCellValue("AF5", "工号");																	// job number
	$sheet->setCellValue("AG5", "缺陷类型");															// defect type
	$sheet->setCellValue("AH5", "缺陷数量");															// defect amount
	$sheet->setCellValue("AI5", "判定");																	// determination
	$sheet->setCellValue("AJ3", "包装标识")->mergeCells("AJ3:AK4");				// packing mark
	$sheet->setCellValue("AJ5", "缺陷代码");															// defect code
	$sheet->setCellValue("AK5", "缺陷数量");															// defect amount
	$sheet->setCellValue("AL3", "盒装过程得分")->mergeCells("AL3:AL5");		// packing score
	$sheet->setCellValue("AM3", "备注")->mergeCells("AM3:AM5");					// packing remark
	
	$sheet->setCellValue("AN3", "判定")->mergeCells("AN3:AN5");					// inspector
	$sheet->setCellValue("AO3", "备注")->mergeCells("AO3:AO5");					// remarks
	
	for ($i=0, $r=6; $i<$aantal; $i++, $r+=2) {
		$sheet->setCellValue("A".$r, $row[$i]['datum'])->mergeCells(sprintf("A%d:A%d",$r, $r+1));
		$sheet->setCellValue("B".$r, $row[$i]['product'])->mergeCells(sprintf("B%d:B%d",$r, $r+1));
		
		$sheet->setCellValue("C".$r, $row[$i]['s_start'])->mergeCells(sprintf("C%d:C%d",$r, $r+1));
		$sheet->setCellValue("D".$r, '-')->mergeCells(sprintf("D%d:D%d",$r, $r+1));
		$sheet->setCellValue("E".$r, $row[$i]['s_end'])->mergeCells(sprintf("E%d:E%d",$r, $r+1));
		
		$sheet->setCellValue("F".$r, $row[$i]['moist_s_min'])->mergeCells(sprintf("F%d:F%d",$r, $r+1));
		$sheet->setCellValue("G".$r, $row[$i]['moist_s_max'])->mergeCells(sprintf("G%d:G%d",$r, $r+1));
		
		$sheet->setCellValue("H".$r, $deworm[$row[$i]['deworm']] )->mergeCells(sprintf("H%d:H%d",$r, $r+1));
		$sheet->setCellValue("I".$r, $row[$i]['dopant'] )->mergeCells(sprintf("I%d:I%d",$r, $r+1));
		$sheet->setCellValue("J".$r, $row[$i]['headend'] )->mergeCells(sprintf("J%d:J%d",$r, $r+1));
		$sheet->setCellValue("K".$r, $row[$i]['empty'] )->mergeCells(sprintf("K%d:K%d",$r, $r+1));
		$sheet->setCellValue("L".$r, $row[$i]['seam'] )->mergeCells(sprintf("L%d:L%d",$r, $r+1));
		$sheet->setCellValue("M".$r, $row[$i]['hole'] )->mergeCells(sprintf("M%d:M%d",$r, $r+1));
		$sheet->setCellValue("N".$r, $row[$i]['break'] )->mergeCells(sprintf("N%d:N%d",$r, $r+1));
		
		for ($g=0; $g<8; $g++) {	
			if ($g < 4)
				setCell($sheet, $r, 14 + ($g % 4), $row[$i]['m'.($g+1)]);
			else
				setCell($sheet, $r+1, 14 + ($g % 4), $row[$i]['m'.($g+1)]);
		}
		$sheet->getStyle(sprintf('O%d:R%d', $r, $r+1))->applyFromArray($thinborder);
		
		$formula = sprintf('=countif(O%d:R%d,"<"&F%d)', $r, $r+1, $r);
		$sheet->setCellValue("S".$r, $formula)->mergeCells(sprintf("S%d:S%d",$r, $r+1));
		$formula = sprintf('=countif(O%d:R%d,">"&G%d)', $r, $r+1, $r);
		$sheet->setCellValue("T".$r, $formula)->mergeCells(sprintf("T%d:T%d",$r, $r+1));
		$formula = sprintf('=countif(O%d:R%d,">="&F%d)-countif(O%d:R%d,">"&G%d)', $r, $r+1, $r, $r, $r+1, $r);
		$sheet->setCellValue("U".$r, $formula)->mergeCells(sprintf("U%d:U%d",$r, $r+1));
		$formula = sprintf('=countif(O%d:R%d,">="&(F%d-0.5))-countif(O%d:R%d,">="&F%d)+countif(O%d:R%d,">"&G%d) - countif(O%d:R%d,">"&(G%d+0.5))', 
												$r, $r+1, $r, $r, $r+1, $r, $r, $r+1, $r, $r, $r+1, $r);
		$sheet->setCellValue("V".$r, $formula)->mergeCells(sprintf("V%d:V%d",$r, $r+1));
		
		$sheet->setCellValue("W".$r, $row[$i]['score'] )->mergeCells(sprintf("W%d:W%d",$r, $r+1));
		$sheet->setCellValue("X".$r, $row[$i]['quality'] )->mergeCells(sprintf("X%d:X%d",$r, $r+1));
		$sheet->setCellValue("Y".$r, $row[$i]['inspector'] )->mergeCells(sprintf("Y%d:Y%d",$r, $r+1));
		$sheet->setCellValue("Z".$r, $row[$i]['incharge'] )->mergeCells(sprintf("Z%d:Z%d",$r, $r+1));
		$sheet->setCellValue("AA".$r, $row[$i]['remarks'] )->mergeCells(sprintf("AA%d:AA%d",$r, $r+1));
	}
	
	$r+=2;
	$sheet->setCellValue("A".$r, '水分超上限红色，超下线白色，符合为绿色，在（标准范围外-标准范围±0.5%）内为黄色' )->mergeCells(sprintf("A%d:AA%d",$r, $r));
	
	// set the date column width
	$sheet->getColumnDimensionByColumn(0)->setAutoSize(false);
	$sheet->getColumnDimensionByColumn(0)->setWidth(12);
	$sheet->getColumnDimensionByColumn(1)->setWidth(15);
	$sheet->getColumnDimensionByColumn(2)->setWidth(12);
	$sheet->getColumnDimensionByColumn(4)->setWidth(12);
	$sheet->getColumnDimensionByColumn(3)->setWidth(2);	
		
	// set colors
	setColor($sheet, "A3:AA5", BLUE);
	setColor($sheet, "S3:V3", YELLOW);

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