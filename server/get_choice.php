<?php

// get the choices of the charts

require_once 'language.php';

extract($_GET);

//echo $group;
switch ($stage) {
	case "rolling": 
		echo sprintf("<option value='lengte'>%s</option>", 		$LABELS[102][$lang]);
		echo sprintf("<option value='omtrek'>%s</option>",		$LABELS[515][$lang]);
		echo sprintf("<option value='gewicht'>%s</option>", 	$LABELS[42][$lang]);
		echo sprintf("<option value='pd'>%s</option>", 				$LABELS[312][$lang]);
		break;
	case "wrapping":
		echo sprintf("<option value='gewicht'>%s</option>", 	$LABELS[42][$lang]);
	case "storage":
		echo sprintf("<option value='moisture'>%s</option>", 	$LABELS[170][$lang]);
		break;
	case "cutting":
	case "stickDefects":
	case "packDefects":
	case "boxDefects":
		echo sprintf("<option value='appearance'>%s</option>",$LABELS[510][$lang]);
		break;
}

?>
