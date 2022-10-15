<?php
include '/xampp/htdocs/capstone/dbconnect.php';



$fetch_sub = "SELECT * FROM subject";
$res = mysqli_query($conn,$fetch_sub);

$subject_array = array();

while ($row = mysqli_fetch_assoc($res)) {
    $subject_array[] = $row;
}


 echo json_encode($subject_array);

?>