<?php
$str1 = "17638293754";
$str2 = "17638293754";



function compareStrings($string1) {
    $count = 0;
    for ($i=0; $i < 11 ; $i++) { 
   
        if($string1[$i] === $string2[$i]){
            $count++;
        }
    }
    if($count === 11){
        echo $count;
    }
}
?>