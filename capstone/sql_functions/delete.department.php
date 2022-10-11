<?php
include '/xampp/htdocs/capstone/dbconnect.php';

$id = $_GET['id'];



$insert_dept = "DELETE FROM department WHERE dept_id = '$id'";

$res = mysqli_query($conn,$insert_dept);


if($res){
    echo "{\"res\" : \"success\"}";
}else{
    echo "{\"res\" : \"error\"}";
}

?>