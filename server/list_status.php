<?php

// list the small status history ans skips rows with status=finished(2) 

require_once 'Classes/pdo.php';

$database = new Database();

// make sure utf8 is stored and retrieved correctly
$database->beginTransaction();
$database->query("SET NAMES 'utf8'");
$database->execute();
$database->query("SET lc_time_names = 'zh_CN'");
$database->execute();

extract($_GET);

// set table and field names with corresponding label
switch ($tab) {
	case "rolling_sub_tab":
	case "wrapping_sub_tab":
		$fields = "id, date, name, status";
		$selection = "id, date, name, ((status+1)%2)*(status+1) AS status";
		break;
	case "storage_sub_tab":
		$fields = "id, date, incharge, status";
		$selection = "id, date, incharge, ((status+1)%2)*(status+1) AS status";
		break;
	case "defects_sub_tab":
		$fields = "id, date, sample, status";
		$selection = "id, date, sample*1 AS sample,((status+1)%2)*(status+1) AS status";
		break;
	default:
		console.log("list_status: unknown tab");
		$fields = "";
		return;
}

$column = explode(", ", $fields);		
											// extract the column names from the $fields
$table = sprintf("gwc_handmade.%s", explode("_", $tab)[0]);		// get the tablename from the $tab-name

if ($table == "gwc_handmade.defects") {		// er zijn 3 defects tables..
	$type = ["stickDefects", "packDefects", "boxDefects"];
	$table = sprintf("gwc_handmade.%s", $type[$defects]);	
}

// paging
$start = $page*$length;
$limit = " LIMIT ". $start .", ". $length;

// sorting
$sort = min([$sort, count($column)-2]);
$order = sprintf(" ORDER BY %s %s, date DESC ", $column[$sort+1], $direction);

$query = sprintf("SELECT %s FROM %s WHERE status<2 %s %s", $selection, $table, $order, $limit);
$database->query($query);
$rows = $database->resultset();
$count = $database->rowCount();

$output = array();

foreach ($rows as $aRow) {
	$regel = "<tr>";

	foreach ($column AS $field) {
		if ($field == "status") {
			$txt = sprintf("<center><span  class='%s'>%s</span></center>", 
									$aRow[$field] == 0 ? "yellowBackground" : ($aRow[$field] == 1 ? "redBackground" : "greenBackground"), str_pad("", 5, "_", STR_PAD_BOTH));
			$block = str_replace("_", "&nbsp;&nbsp;", $txt); 
			$regel = sprintf("%s<td style='height:1.3em'>%s</td>", $regel, $block);
		} elseif ($field =='id') {
			$regel = sprintf("%s<td style='display:none'>%s</td>", $regel, $aRow[$field]);
		} else {
			$regel = sprintf("%s<td><center>%s</center></td>", $regel, $aRow[$field]);
		}
	}

	$regel .= "</tr>";
	$output['records'][] = $regel;
}

$database->endTransaction();

$output["count"] = $count;
$output["crc"] = md5($regel);

echo json_encode( $output );

?>