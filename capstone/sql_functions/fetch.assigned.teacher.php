<?php
include '/xampp/htdocs/capstone/dbconnect.php';



$fetch_data = "SELECT assigned_id, subject_name, CONCAT(teacher_firstname,' ', teacher_middlename,' ', teacher_lastname) as teacher_name, course_abbreviation, school_year, year_level
FROM assigned_teachers
INNER JOIN subject ON assigned_teachers.subject_id = subject.subject_id
INNER JOIN teacher ON assigned_teachers.teacher_id = teacher.teacher_id
INNER JOIN course ON assigned_teachers.course_id = course.course_id ORDER BY teacher_name ASC";

$res = mysqli_query($conn,$fetch_data);


$data = array();

while ($row = mysqli_fetch_assoc($res)) {
    $data[] = $row;
}


 echo json_encode($data);

?>