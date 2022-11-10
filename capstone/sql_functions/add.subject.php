<?php
include '/xampp/htdocs/capstone/dbconnect.php';

 

$name = str_replace( "'" ,"''",htmlspecialchars($_GET['name']));
$code = str_replace( "'" ,"''",htmlspecialchars($_GET['code']));




$inset_sub = "INSERT INTO `subject` (subject_name, subject_code) 
VALUES ('$name', '$code')";

$res = mysqli_query($conn,$inset_sub);


if($res){
    echo "{\"res\" : \"success\"}";
}else{
   echo "{\"res\" : \"error\"}";
}

?>