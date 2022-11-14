<?php
include '/xampp/htdocs/capstone/dbconnect.php';

 

$name = str_replace( "'" ,"''",htmlspecialchars($_GET['subject']));
$code = str_replace( "'" ,"''",htmlspecialchars($_GET['code']));
$course =  str_replace( "'" ,"''",htmlspecialchars($_GET['course']));
$year =  str_replace( "'" ,"''",htmlspecialchars($_GET['year']));
$sem =  str_replace( "'" ,"''",htmlspecialchars($_GET['sem']));



$update_subject = "UPDATE subject SET subject_name='$name', course_id = '$course', year_level = '$year', semester = '$sem' WHERE subject_code = '$code'";



$res = mysqli_query($conn,$update_subject);


if($res){
    echo "{\"res\" : \"success\"}";
}else{
   echo "{\"res\" : \"error\"}";
}

?>