<?php
$text = "accX".$_GET['accX'].", accY".$_GET['accY'].", accZ".$_GET['accZ'].PHP_EOL;
file_put_contents('values.csv', $text, FILE_APPEND);
?>