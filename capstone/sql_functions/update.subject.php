<?php
include '/xampp/htdocs/capstone/dbconnect.php';

 

$sid = str_replace( "'" ,"''",htmlspecialchars($_GET['id']));
$name = str_replace( "'" ,"''",htmlspecialchars($_GET['name']));
$code = str_replace( "'" ,"''",htmlspecialchars($_GET['code']));



$inset_sub = "UPDATE `subject` SET `subject_code`= '$code',`subject_name`= '$name' WHERE `subject_id`= '$sid';";

$res = mysqli_query($conn,$inset_sub);


if($res){
    echo "{\"res\" : \"success\"}";
}else{
   echo "{\"res\" : \"error\"}";
}

?>