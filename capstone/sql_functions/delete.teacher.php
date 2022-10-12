<?php
include '/xampp/htdocs/capstone/dbconnect.php';

$id = $_GET['id'];



$insert_dept = "DELETE FROM teacher WHERE teacher_id = '$id' and dept_id != '24' ";

$res = mysqli_query($conn,$insert_dept);


if($res){
    echo "{\"res\" : \"success\"}";
}else{
    echo "{\"res\" : \"error\"}";
}

?>