<?php
include '/xampp/htdocs/capstone/dbconnect.php';

$deptName = $_GET['name'];
$deptAbb = $_GET['abb'];
$deptUser = $_GET['user'];
$deptPass = $_GET['pass'];


$insert_dept = "INSERT INTO `department`( `dept_name`, `dept_abbreviation`, `dept_username`, `dept_password`) 
VALUES ('$deptName','$deptAbb','$deptUser','$deptPass')";

$res = mysqli_query($conn,$insert_dept);


if($res){
    echo "{\"res\" : \"success\"}";
}else{
    echo "{\"res\" : \"error\"}";
}

?>