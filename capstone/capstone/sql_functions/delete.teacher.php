<?php
include '/xampp/htdocs/capstone/dbconnect.php';

$id = $_GET['id'];



$delete_teach = "DELETE FROM teacher WHERE teacher_id = '$id' and dept_id != '24' ";

$res = mysqli_query($conn,$delete_teach);


if($res){
    echo "{\"res\" : \"success\"}";
}else{
    echo "{\"res\" : \"error\"}";
}

?>