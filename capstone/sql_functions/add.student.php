<?php
include '/xampp/htdocs/capstone/dbconnect.php';

 

$fn = str_replace( "'" ,"''",htmlspecialchars($_GET['sfn']));
$ln = str_replace( "'" ,"''",htmlspecialchars($_GET['sln']));
$mn = str_replace( "'" ,"''",htmlspecialchars($_GET['smn']));
$sid = str_replace( "'" ,"''",htmlspecialchars($_GET['sid']));
$dept = str_replace( "'" ,"''",htmlspecialchars($_GET['dept']));
$course = str_replace( "'" ,"''",htmlspecialchars($_GET['course']));
$year = str_replace( "'" ,"''",htmlspecialchars($_GET['year']));




$insert_student = "INSERT INTO `student`(`student_schoolid`, `student_firstname`, `student_lastname`, `student_middlename`,
                 `student_deptID` ,`student_courseID`, year_level)   
                VALUES ('$sid', '$fn','$ln','$mn','$dept','$course', '$year')";

$res = mysqli_query($conn,$insert_student);


if($res){
    echo "{\"res\" : \"success\"}";
}else{
   echo "{\"res\" : \"error\"}";
}

?>