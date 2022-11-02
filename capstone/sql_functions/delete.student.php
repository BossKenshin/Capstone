<?php
include '/xampp/htdocs/capstone/dbconnect.php';

$id = $_GET['id'];



$delete_student = "DELETE FROM student WHERE student_id = '$id'";

$res = mysqli_query($conn,$delete_student);


if($res){
    echo "{\"res\" : \"success\"}";
}else{
    echo "{\"res\" : \"error\"}";
}

?>