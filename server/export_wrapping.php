<?php

// export the selected data to an excel file
// use xhr call to use this (filesaver.js)

require_once realpath($_SERVER['DOCUMENT_ROOT']).'/ajax/Classes/pdo.php';
require_once realpath($_SERVER['DOCUMENT_ROOT']).'/ajax/Classes/PHPExcel.php';

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
$query = sprintf("SELECT t1.*, t1.name AS sampling, DATE(t1.date) AS datum, t2.* FROM gwc_handmade.wrapping t1
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
	$sheet->setCellValue("A3", "上茄衣过程")->mergeCells("A3:B3");						// rolling process
	$sheet->setCellValue("C3", "产品质量情况（超标支数）")->mergeCells("C3:P3");	// product quality (nr out of specs)
	$sheet->setCellValue("A4", "生产日期")->mergeCells("A4:A5");							// date
	$sheet->setCellValue("B4", "抽样点")->mergeCells("B4:B5");								// sampling point
	$sheet->setCellValue("C4", "烟支外观（支）")->mergeCells("C4:E4");					// cigarette appearance
	$sheet->setCellValue("F4", "茄衣光洁度（支）")->mergeCells("F4:G4");				// degree of finish of wrapper
	$sheet->setCellValue("H4", "茄衣完整度（支）")->mergeCells("H4:I4");				// integrity of wrapper
	$sheet->setCellValue("J4", "烟支外观（支）")->mergeCells("J4:L4");					// cigarette appearance
	$sheet->setCellValue("M4", "茄衣光洁度（支）")->mergeCells("M4:N4");				// degree of finish of wrapper
	$sheet->setCellValue("O4", "茄衣完整度（支）")->mergeCells("O4:P4");				// integrity of wrapper
	$sheet->setCellValue("Q3", "批次 质量判定")->mergeCells("Q3:Q5");					// batch score
	$sheet->setCellValue("R3", "批次 质量判定")->mergeCells("R3:R5");					// batch quality
	$sheet->setCellValue("S3", "检验员")->mergeCells("S3:S5");								// inspector
	$sheet->setCellValue("T3", "备注")->mergeCells("T3:T5");									// remark
	
	$sheet->setCellValue("C5", "茄衣颜色");																		// （color of wrapper）
	$sheet->setCellValue("D5", "头尾");																			// （head & end）
	$sheet->setCellValue("E5", "转数");																			// （number of turns - wrapped ok）
	$sheet->setCellValue("F5", "切口");																			// （incision）
	$sheet->setCellValue("G5", "空头");																			// （empty head）
	$sheet->setCellValue("H5", "松紧度");																			// （tightness）
	$sheet->setCellValue("I5", "脉纹");																			// （vein lines）
	$sheet->setCellValue("J5", "折痕");																			// （crease）
	$sheet->setCellValue("K5", "病斑");																			// （spots）
	$sheet->setCellValue("L5", "污痕");																			// （blot）
	$sheet->setCellValue("M5", "缝口");																			// （seam）
	$sheet->setCellValue("N5", "洞眼");																			// （hole）
	$sheet->setCellValue("O5", "破皮");																			// （breakage）
	$sheet->setCellValue("P5", "拼接");																			// （splice）			
	
	for ($i=0, $r=6; $i<$aantal; $i++, $r+=2) {
		$sheet->setCellValue("A".$r, $row[$i]['datum'])->mergeCells(sprintf("A%d:A%d",$r, $r+1));
		$sheet->setCellValue("B".$r, $row[$i]['sampling'])->mergeCells(sprintf("B%d:B%d",$r, $r+1));
		
		$sheet->setCellValue("C".$r, $row[$i]['color'])->mergeCells(sprintf("C%d:C%d",$r, $r+1));
		$sheet->setCellValue("D".$r, $row[$i]['headend'])->mergeCells(sprintf("D%d:D%d",$r, $r+1));
		$sheet->setCellValue("E".$r, $row[$i]['wrapok'])->mergeCells(sprintf("E%d:E%d",$r, $r+1));
		$sheet->setCellValue("F".$r, $row[$i]['incision'])->mergeCells(sprintf("F%d:F%d",$r, $r+1));
		$sheet->setCellValue("G".$r, $row[$i]['empty'])->mergeCells(sprintf("G%d:G%d",$r, $r+1));
		$sheet->setCellValue("H".$r, $row[$i]['tightness'])->mergeCells(sprintf("H%d:H%d",$r, $r+1));
		$sheet->setCellValue("I".$r, $row[$i]['veins'])->mergeCells(sprintf("I%d:I%d",$r, $r+1));
		$sheet->setCellValue("J".$r, $row[$i]['crease'])->mergeCells(sprintf("J%d:J%d",$r, $r+1));
		$sheet->setCellValue("K".$r, $row[$i]['spot'])->mergeCells(sprintf("K%d:K%d",$r, $r+1));
		$sheet->setCellValue("L".$r, $row[$i]['blot'])->mergeCells(sprintf("L%d:L%d",$r, $r+1));
		$sheet->setCellValue("M".$r, $row[$i]['seam'])->mergeCells(sprintf("M%d:M%d",$r, $r+1));
		$sheet->setCellValue("N".$r, $row[$i]['hole'])->mergeCells(sprintf("N%d:N%d",$r, $r+1));
		$sheet->setCellValue("O".$r, $row[$i]['crack'])->mergeCells(sprintf("O%d:O%d",$r, $r+1));
		$sheet->setCellValue("P".$r, $row[$i]['splice'])->mergeCells(sprintf("P%d:P%d",$r, $r+1));
		
		$sheet->setCellValue("Q".$r, $row[$i]['score'])->mergeCells(sprintf("Q%d:Q%d",$r, $r+1));
		$sheet->setCellValue("R".$r, $row[$i]['quality'])->mergeCells(sprintf("R%d:R%d",$r, $r+1));
		$sheet->setCellValue("S".$r, $row[$i]['inspector'])->mergeCells(sprintf("S%d:S%d",$r, $r+1));
		$sheet->setCellValue("T".$r, $row[$i]['remarks'])->mergeCells(sprintf("T%d:T%d",$r, $r+1));
	}
	
	// set the date column width
	$sheet->getColumnDimensionByColumn(0)->setAutoSize(false);
	$sheet->getColumnDimensionByColumn(0)->setWidth(12);	
		
	// set colors
	setColor($sheet, "A3:T5", BLUE);
	setColor($sheet, "A3:B3", YELLOW);

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