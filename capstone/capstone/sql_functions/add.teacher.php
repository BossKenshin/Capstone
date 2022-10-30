<?php
include '/xampp/htdocs/capstone/dbconnect.php';

 

$fn = str_replace( "'" ,"''",htmlspecialchars($_GET['fn']));
$ln = str_replace( "'" ,"''",htmlspecialchars($_GET['ln']));
$mn = str_replace( "'" ,"''",htmlspecialchars($_GET['mn']));
$un = str_replace( "'" ,"''",htmlspecialchars($_GET['user']));
$ps = str_replace( "'" ,"''",htmlspecialchars($_GET['pass']));
$dept = str_replace( "'" ,"''",htmlspecialchars($_GET['dept']));



$insert_teach = "INSERT INTO `teacher`( `teacher_firstname`, `teacher_lastname`, `teacher_middlename`, `teacher_username`, `teacher_password`,`dept_id`) 
VALUES ('$fn','$ln','$mn','$un','$ps','$dept')";

$res = mysqli_query($conn,$insert_teach);


if($res){
    echo "{\"res\" : \"success\"}";
}else{
   echo "{\"res\" : \"error\"}";
}

?>