<?php

include '/xampp/htdocs/capstone/dbconnect.php';


$y = $_GET['year'];
$s = $_GET['sem'];
$course = $_GET['course'];


$fetch_sub = "SELECT `subject_id`,`subject_code`,`subject_name`, course.course_abbreviation as course,`year_level`, semester FROM `subject` INNER JOIN course ON subject.course_id = course.course_id WHERE course.course_abbreviation = '$course' AND subject.year_level = '$y' AND subject.semester = '$s'";
$res = mysqli_query($conn,$fetch_sub);

$subject_array = array();

while ($row = mysqli_fetch_assoc($res)) {
    $subject_array[] = $row;
}


 echo json_encode($subject_array);

?>