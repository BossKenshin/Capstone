<?php
include '/xampp/htdocs/capstone/dbconnect.php';

 

$name = str_replace( "'" ,"''",htmlspecialchars($_GET['name']));



$inset_sub = "INSERT INTO `subject` (`subject_name`) 
VALUES ('$name')";

$res = mysqli_query($conn,$inset_sub);


if($res){
    echo "{\"res\" : \"success\"}";
}else{
   echo "{\"res\" : \"error\"}";
}

?>