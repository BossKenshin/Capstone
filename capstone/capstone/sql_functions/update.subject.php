<?php
include '/xampp/htdocs/capstone/dbconnect.php';

 

$sid = str_replace( "'" ,"''",htmlspecialchars($_GET['id']));
$sname = str_replace( "'" ,"''",htmlspecialchars($_GET['name']));




$inset_sub = "UPDATE `subject` SET subject_name = '$sname' WHERE subject_id = '$sid'";

$res = mysqli_query($conn,$inset_sub);


if($res){
    echo "{\"res\" : \"success\"}";
}else{
   echo "{\"res\" : \"error\"}";
}

?>