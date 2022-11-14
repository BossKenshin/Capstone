<?php
include '/xampp/htdocs/capstone/dbconnect.php';



$fetch_sub = "SELECT `subject_id`,`subject_code`,`subject_name`, course.course_abbreviation as course,`year_level`, semester FROM `subject` INNER JOIN course ON subject.course_id = course.course_id;";
$res = mysqli_query($conn,$fetch_sub);

$subject_array = array();

while ($row = mysqli_fetch_assoc($res)) {
    $subject_array[] = $row;
}


 echo json_encode($subject_array);

?>