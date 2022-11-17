<?php
include '/xampp/htdocs/capstone/dbconnect.php';

 

$sid = str_replace( "'" ,"''",htmlspecialchars($_GET['id']));
$name = str_replace( "'" ,"''",htmlspecialchars($_GET['name']));
$code = str_replace( "'" ,"''",htmlspecialchars($_GET['code']));
$course =  str_replace( "'" ,"''",htmlspecialchars($_GET['course']));
$year =  str_replace( "'" ,"''",htmlspecialchars($_GET['year']));
$sem =  str_replace( "'" ,"''",htmlspecialchars($_GET['sem']));



$inset_sub = "UPDATE `subject` SET `subject_code`= '$code',`subject_name`= '$name', course_id = '$course', year_level = '$year', semester = '$sem' WHERE `subject_id`= '$sid';";

$res = mysqli_query($conn,$inset_sub);


if($res){
    echo "{\"res\" : \"success\"}";
}else{
   echo "{\"res\" : \"error\"}";
}

?>