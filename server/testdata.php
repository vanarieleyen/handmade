<?php

// generates a test product with 3 spec periods (3 months in the past)
// generates test data with data for every hour / 90 days
// the product is called 'test' and automatically removed and populated with random data
// http://192.168.56.10/pline/server/testdata.php

require_once 'Classes/pdo.php';

extract($_GET);

$database = new Database();

// make sure utf8 is stored and retrieved correctly
$database->beginTransaction();
$database->query("SET NAMES 'utf8'");
$database->execute();
$database->query("SET lc_time_names = 'zh_CN'");
$database->execute();

// return random number distributed in a bell curve (to get real-looking random data)
// min/max: upper lower limit
// std_deviation: width of the curve (3 is rather good)
// step: array index increment when storing the result in an array
function purebell($min,$max,$std_deviation,$step=1) {
	$rand1 = (float)mt_rand()/(float)mt_getrandmax();
	$rand2 = (float)mt_rand()/(float)mt_getrandmax();
	$gaussian_number = sqrt(-2 * log($rand1)) * cos(2 * M_PI * $rand2);
	$mean = ($max + $min) / 2;
	$random_number = ($gaussian_number * $std_deviation) + $mean;
	$random_number = round($random_number / $step) * $step;
	if($random_number < $min || $random_number > $max) {
		$random_number = purebell($min, $max,$std_deviation);
	}
  return $random_number;
}

// remove test product from specs and data
$database->query("DELETE FROM gwc_handmade.specs WHERE name='test' ");		
$database->execute();

// delete test
$database->query("DELETE FROM gwc_handmade.rolling WHERE product='test' ");
$database->execute();
$database->query("DELETE FROM gwc_handmade.wrapping WHERE product='test' ");
$database->execute();
$database->query("DELETE FROM gwc_handmade.storage WHERE product='test' ");
$database->execute();

// insert test specs of 3 time periods
$sql = "INSERT INTO gwc_handmade.specs (name, start, end, pid, 
	rol_l_min, rol_l_max, rol_c_min, rol_c_max, rol_w_min, rol_w_max, rol_p_min, rol_p_max, moist_s_min, moist_s_max,
	moist_w_min, moist_w_max, weight_w_min, weight_w_max)  
		VALUES('test', DATE_SUB(NOW(), INTERVAL 30 DAY), '3000-01-01 00:00:00', 88888888,
		104, 106, 71, 73, 11.5, 13.5, 30, 90, 12.5, 14, 12.5, 14, 11.5, 13.5) ";
$database->query($sql);
$database->execute();

$sql = "INSERT INTO gwc_handmade.specs (name, start, end, pid, 
	rol_l_min, rol_l_max, rol_c_min, rol_c_max, rol_w_min, rol_w_max, rol_p_min, rol_p_max, moist_s_min, moist_s_max,
	moist_w_min, moist_w_max, weight_w_min, weight_w_max) 
		VALUES('test', DATE_SUB(NOW(), INTERVAL 60 DAY), DATE_SUB(NOW(), INTERVAL 30 DAY), 88888888, 
		103, 105, 70, 72, 10.5, 12.5, 25, 80, 11.5, 13, 11.5, 14, 10.5, 12.5) ";
$database->query($sql);
$database->execute();

$sql = "INSERT INTO gwc_handmade.specs (name, start, end, pid, 
	rol_l_min, rol_l_max, rol_c_min, rol_c_max, rol_w_min, rol_w_max, rol_p_min, rol_p_max, moist_s_min, moist_s_max,
	moist_w_min, moist_w_max, weight_w_min, weight_w_max) 
		VALUES('test', DATE_SUB(NOW(), INTERVAL 90 DAY), DATE_SUB(NOW(), INTERVAL 60 DAY), 88888888, 
		105, 107, 72, 74, 12.5, 14.5, 50, 95, 13.5, 15, 13.5, 15, 12.5, 14.5) ";
$database->query($sql);
$database->execute();

function generate($specmin, $specmax, $date) {
	global $database;
	
	$sql = sprintf("SELECT * FROM gwc_handmade.specs WHERE DATE('%s') BETWEEN start AND end AND name='test' ", $date);
	$database->query($sql);
	$spec = $database->single();
	
	$ll = 100*$spec[$specmin];					// exact spec
	$ul = 100*$spec[$specmax];
	$ll = $ll-($ll/100*rand(1, 13));		// expand the spec to generate more realistic data
	$ul = $ul+($ul/100*rand(1, 13));
	
	return purebell($ll, $ul, 3)/100;
}


$amount = 90 * 24;		// 90 days, 24 hours
for ($i = 0; $i < $amount; $i++) {
	
	$t = new DateTime();
	$t->sub( new DateInterval( sprintf('PT%sH', $i) ));
	$date = $t->format('Y-m-d H:m:s');
	
	$l1 = generate("rol_l_min", "rol_l_max", $date);
	$l2 = generate("rol_l_min", "rol_l_max", $date);
	$l3 = generate("rol_l_min", "rol_l_max", $date);
	$l4 = generate("rol_l_min", "rol_l_max", $date);
	$l5 = generate("rol_l_min", "rol_l_max", $date);
	$l6 = generate("rol_l_min", "rol_l_max", $date);
	$l7 = generate("rol_l_min", "rol_l_max", $date);
	$l8 = generate("rol_l_min", "rol_l_max", $date);
	$l9 = generate("rol_l_min", "rol_l_max", $date);
	$l10 = generate("rol_l_min", "rol_l_max", $date);

	$c1 = generate("rol_c_min", "rol_c_max", $date);
	$c2 = generate("rol_c_min", "rol_c_max", $date);
	$c3 = generate("rol_c_min", "rol_c_max", $date);
	$c4 = generate("rol_c_min", "rol_c_max", $date);
	$c5 = generate("rol_c_min", "rol_c_max", $date);
	$c6 = generate("rol_c_min", "rol_c_max", $date);
	$c7 = generate("rol_c_min", "rol_c_max", $date);
	$c8 = generate("rol_c_min", "rol_c_max", $date);
	$c9 = generate("rol_c_min", "rol_c_max", $date);
	$c10 = generate("rol_c_min", "rol_c_max", $date);
	
	$w1 = generate("rol_w_min", "rol_w_max", $date);
	$w2 = generate("rol_w_min", "rol_w_max", $date);
	$w3 = generate("rol_w_min", "rol_w_max", $date);
	$w4 = generate("rol_w_min", "rol_w_max", $date);
	$w5 = generate("rol_w_min", "rol_w_max", $date);
	$w6 = generate("rol_w_min", "rol_w_max", $date);
	$w7 = generate("rol_w_min", "rol_w_max", $date);
	$w8 = generate("rol_w_min", "rol_w_max", $date);
	$w9 = generate("rol_w_min", "rol_w_max", $date);
	$w10 = generate("rol_w_min", "rol_w_max", $date);
	
	$p1 = generate("rol_p_min", "rol_p_max", $date);
	$p2 = generate("rol_p_min", "rol_p_max", $date);
	$p3 = generate("rol_p_min", "rol_p_max", $date);
	$p4 = generate("rol_p_min", "rol_p_max", $date);
	$p5 = generate("rol_p_min", "rol_p_max", $date);
	$p6 = generate("rol_p_min", "rol_p_max", $date);
	$p7 = generate("rol_p_min", "rol_p_max", $date);
	$p8 = generate("rol_p_min", "rol_p_max", $date);
	$p9 = generate("rol_p_min", "rol_p_max", $date);
	$p10 = generate("rol_p_min", "rol_p_max", $date);
	
	$sql = sprintf("INSERT INTO gwc_handmade.rolling 
				(date, product, 
				l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10,
				w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10 ) 
					VALUES('%s','test',%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,
					%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s )",
					$date, $l1,$l2,$l3,$l4,$l5, $l6,$l7,$l8,$l9,$l10,$c1,$c2,$c3,$c4,$c5,$c6,$c7,$c8,$c9,$c10,
					$w1,$w2,$w3,$w4,$w5,$w6,$w7,$w8,$w9,$w10,$p1,$p2,$p3,$p4,$p5,$p6,$p7,$p8,$p9,$p1);
	$database->query($sql);
	$database->execute();
	
	$m1 = generate("moist_s_min", "moist_s_max", $date);
	$m2 = generate("moist_s_min", "moist_s_max", $date);
	$m3 = generate("moist_s_min", "moist_s_max", $date);
	$m4 = generate("moist_s_min", "moist_s_max", $date);
	$m5 = generate("moist_s_min", "moist_s_max", $date);
	$m6 = generate("moist_s_min", "moist_s_max", $date);
	$m7 = generate("moist_s_min", "moist_s_max", $date);
	$m8 = generate("moist_s_min", "moist_s_max", $date);
	
	$sql = sprintf("INSERT INTO gwc_handmade.storage 
				(date, product, m1, m2, m3, m4, m5, m6, m7, m8 ) 
					VALUES('%s','test',%s,%s,%s,%s,%s,%s,%s,%s )",
					$date, $m1,$m2,$m3,$m4,$m5,$m6,$m7,$m8);
	$database->query($sql);
	$database->execute();

	$m1 = generate("moist_w_min", "moist_w_max", $date);
	$m2 = generate("moist_w_min", "moist_w_max", $date);
	$m3 = generate("moist_w_min", "moist_w_max", $date);
	$m4 = generate("moist_w_min", "moist_w_max", $date);
	$m5 = generate("moist_w_min", "moist_w_max", $date);
	$m6 = generate("moist_w_min", "moist_w_max", $date);
	$m7 = generate("moist_w_min", "moist_w_max", $date);
	$m8 = generate("moist_w_min", "moist_w_max", $date);
	$m9 = generate("moist_w_min", "moist_w_max", $date);
	$m10 = generate("moist_w_min", "moist_w_max", $date);
	
	$w1 = generate("weight_w_min", "weight_w_max", $date);
	$w2 = generate("weight_w_min", "weight_w_max", $date);
	$w3 = generate("weight_w_min", "weight_w_max", $date);
	$w4 = generate("weight_w_min", "weight_w_max", $date);
	$w5 = generate("weight_w_min", "weight_w_max", $date);
	$w6 = generate("weight_w_min", "weight_w_max", $date);
	$w7 = generate("weight_w_min", "weight_w_max", $date);
	$w8 = generate("weight_w_min", "weight_w_max", $date);
	$w9 = generate("weight_w_min", "weight_w_max", $date);
	$w10 = generate("weight_w_min", "weight_w_max", $date);
	
	$sql = sprintf("INSERT INTO gwc_handmade.wrapping 
				(date, product, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, w1, w2, w3, w4, w5, w6, w7, w8, w9, w10 ) 
					VALUES('%s','test',%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s )",
					$date, $m1,$m2,$m3,$m4,$m5,$m6,$m7,$m8,$m9,$m10,$w1,$w2,$w3,$w4,$w5,$w6,$w7,$w8,$w9,$w10);
	$database->query($sql);
	$database->execute();
}



$database->endTransaction();


?>