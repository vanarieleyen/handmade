<?php

// http://localhost/handmade/server/get_history.php?lang=1&tab=rolling_sub_tab

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
		$fields = "id, date, product, name, score, quality, inspector, status";
		$selection = "id, date, product, name, score*1.0 AS score, quality*1.0 AS quality, inspector, ((status+1)%2)*(status+1) AS status";
		break;
	case "cutting_sub_tab":
		$fields = "id, date, product, name, score, quality, inspector";
		$selection = "id, date, product, name, score*1.0 AS score, quality*1.0 AS quality, inspector";
		break;
	case "storage_sub_tab":
		$fields = "id, date, product, incharge, score, quality, inspector, status";
		$selection = "id, date, product, incharge, score*1.0 AS score, quality*1.0 AS quality, inspector, ((status+1)%2)*(status+1) AS status";
		break;
	case "defects_sub_tab":
		$fields = "id, date, product, sample, score, inspector, status";
		$selection = "id, date, product, sample, score*1.0 AS score, inspector, ((status+1)%2)*(status+1) AS status";
		break;
	default:
		console.log("list_history: unknown tab");
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
$order = sprintf(" ORDER BY %s %s ", $column[$sort+1], $direction);

$query = sprintf("SELECT %s FROM %s WHERE 1 %s %s", $selection, $table, $order, $limit);
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
		} elseif (strstr($field, "score")) {
			$score = $aRow[$field];
			$txt = sprintf("<center><span class='%s'>%s</span></center>", $score<95?'red':($score<97?'orange':'green' ), $score);
			$regel = sprintf("%s<td>%s</td>", $regel, $txt);
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