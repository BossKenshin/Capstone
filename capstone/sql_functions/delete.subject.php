<?php
include '/xampp/htdocs/capstone/dbconnect.php';

$id = $_GET['id'];



$delete = "DELETE FROM subject WHERE subject_id = '$id'";

$res = mysqli_query($conn,$delete);


if($res){
    echo "{\"res\" : \"success\"}";
}else{
    echo "{\"res\" : \"error\"}";
}

?>