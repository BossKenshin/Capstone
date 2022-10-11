<?php
include '/xampp/htdocs/capstone/dbconnect.php';

 

$cName = str_replace( "'" ,"''",htmlspecialchars($_GET['name']));
$cAbb = str_replace( "'" ,"''",htmlspecialchars($_GET['abb']));
$cDeptID = str_replace( "'" ,"''",htmlspecialchars($_GET['dept']));


$insert_dept = "INSERT INTO `course`( `course_name`, `course_abbreviation`, `dept_id`) 
VALUES ('$cName','$cAbb','$cDeptID')";

$res = mysqli_query($conn,$insert_dept);


if($res){
    echo "{\"res\" : \"success\"}";
}else{
   echo "{\"res\" : \"error\"}";
}

?>