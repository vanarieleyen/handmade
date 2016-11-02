<?php

extract($_GET);

$nr = $nr +1;

$result = array();
$result['ok'] = $nr;
echo json_encode($result);

?>