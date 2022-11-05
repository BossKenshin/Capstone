<?php
include '/xampp/htdocs/capstone/dbconnect.php';

 
$check_student = "SELECT student_schoolid FROM student";

$res = mysqli_query($conn,$check_student);

$schoolId_arr = array();

while ($row = mysqli_fetch_assoc($res)) {
    $schoolId_arr[] = $row;
}


 echo json_encode($schoolId_arr);


?>