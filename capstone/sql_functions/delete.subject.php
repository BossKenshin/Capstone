<?php
include '/xampp/htdocs/capstone/dbconnect.php';

$id = $_GET['id'];

$deleteGrade = "DELETE FROM `grades` WHERE subject_id = '$id'";
mysqli_query($conn, $deleteGrade);


$delete = "DELETE FROM subject WHERE subject_id = '$id'";

$res = mysqli_query($conn,$delete);



if($res){
    echo "{\"res\" : \"success\"}";
}else{
    echo "{\"res\" : \"error\"}";
}

?>