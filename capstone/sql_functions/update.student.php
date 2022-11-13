<?php
include '/xampp/htdocs/capstone/dbconnect.php';

 
$id = str_replace( "'" ,"''",htmlspecialchars($_GET['id']));
$fn = str_replace( "'" ,"''",htmlspecialchars($_GET['sfn']));
$ln = str_replace( "'" ,"''",htmlspecialchars($_GET['sln']));
$mn = str_replace( "'" ,"''",htmlspecialchars($_GET['smn']));
$sid = str_replace( "'" ,"''",htmlspecialchars($_GET['sid']));
$dept = str_replace( "'" ,"''",htmlspecialchars($_GET['dept']));
$course = str_replace( "'" ,"''",htmlspecialchars($_GET['course']));
$year = str_replace( "'" ,"''",htmlspecialchars($_GET['year']));




$update_student = "UPDATE student SET
 student_schoolid = '$sid', student_firstname = '$fn', student_lastname = '$ln',
  student_middlename = '$mn', student_deptID = '$dept', student_courseID = '$course', year_level = '$year'
  WHERE student_id = '$id'";

$res = mysqli_query($conn,$update_student);


if($res){
    echo "{\"res\" : \"success\"}";
}else{
   echo "{\"res\" : \"error\"}";
}

?>