<?php

include '/xampp/htdocs/capstone/dbconnect.php';


$y = $_GET['year'];
$s = $_GET['sem'];
$id = $_GET['id'];
$course = $_GET['course'];


$fetch_grades= "SELECT subject.subject_code, grades.grade FROM `grades`
INNER JOIN subject ON grades.subject_id = subject.subject_id
INNER JOIN course ON grades.course_id = course.course_id
WHERE subject.semester = '$s' AND subject.year_level = '$y' AND grades.student_id = '$id' AND course.course_abbreviation = '$course'";


$res = mysqli_query($conn,$fetch_grades);

$grades = array();

while ($row = mysqli_fetch_assoc($res)) {
    $grades[] = $row;
}


 echo json_encode($grades);

?>