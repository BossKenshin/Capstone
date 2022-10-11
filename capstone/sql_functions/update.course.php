<?php
include '/xampp/htdocs/capstone/dbconnect.php';

$cId = $_GET['id'];
$cName = str_replace( "'" ,"''",htmlspecialchars($_GET['name']));
$cAbb = str_replace( "'" ,"''",htmlspecialchars($_GET['abb']));
$cDeptID = str_replace( "'" ,"''",htmlspecialchars($_GET['dept']));


$insert_dept = "UPDATE course SET course_name = '$cName', course_abbreviation = '$cAbb', dept_id = '$cDeptID' WHERE course_id = '$cId'"; 
$res = mysqli_query($conn,$insert_dept);


if($res){
    echo "{\"res\" : \"success\"}";
}else{
    echo "{\"res\" : \"error\"}";
}

?>