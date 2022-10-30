<?php
include '/xampp/htdocs/capstone/dbconnect.php';

$deptId = $_GET['id'];
$deptName = str_replace( "'" ,"''",htmlspecialchars($_GET['name']));
$deptAbb = str_replace( "'" ,"''",htmlspecialchars($_GET['abb']));
$deptUser = str_replace( "'" ,"''",htmlspecialchars($_GET['user']));
$deptPass = str_replace( "'" ,"''",htmlspecialchars($_GET['pass']));


$insert_dept = "UPDATE department SET `dept_username`='$deptUser',`dept_password`='$deptPass',`dept_name`='$deptName',`dept_abbreviation`='$deptAbb' WHERE dept_id = '$deptId'";
$res = mysqli_query($conn,$insert_dept);


if($res){
    echo "{\"res\" : \"success\"}";
}else{
    echo "{\"res\" : \"error\"}";
}

?>