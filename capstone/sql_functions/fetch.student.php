<?php
include '/xampp/htdocs/capstone/dbconnect.php';

$student = "SELECT `student_id` as id, `student_schoolid`, `student_firstname`, `student_lastname`, `student_middlename`, department.dept_abbreviation as dept , course.course_abbreviation as course, year_level FROM `student`
INNER JOIN department ON student.student_deptID = department.dept_id
INNER JOIN course ON student.student_courseID = course.course_id;";
$res = mysqli_query($conn,$student);

$student_arr = array();

while ($row = mysqli_fetch_assoc($res)) {
    $student_arr[] = $row;
}


 echo json_encode($student_arr);

?>