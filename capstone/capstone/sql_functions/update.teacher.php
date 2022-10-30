<?php
include '/xampp/htdocs/capstone/dbconnect.php';

$tid = $_GET['id'];
$fn = str_replace( "'" ,"''",htmlspecialchars($_GET['fn']));
$ln = str_replace( "'" ,"''",htmlspecialchars($_GET['ln']));
$mn = str_replace( "'" ,"''",htmlspecialchars($_GET['mn']));
$un = str_replace( "'" ,"''",htmlspecialchars($_GET['user']));
$ps = str_replace( "'" ,"''",htmlspecialchars($_GET['pass']));
$dept = str_replace( "'" ,"''",htmlspecialchars($_GET['dept']));



$update_teacher = "UPDATE teacher SET teacher_firstname = '$fn', teacher_lastname = '$ln', teacher_middlename = '$mn', teacher_username = '$un', teacher_password = '$ps', dept_id = '$dept' WHERE teacher_id = '$tid'";

$res = mysqli_query($conn,$update_teacher);


if($res){
    echo "{\"res\" : \"success\"}";
}else{
   echo "{\"res\" : \"error\"}";
}

?>