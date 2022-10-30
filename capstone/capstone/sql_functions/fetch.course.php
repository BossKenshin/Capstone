<?php
include '/xampp/htdocs/capstone/dbconnect.php';

$course_dept = "SELECT course_id, course_name, course_abbreviation, department.dept_name as dept, course.dept_id FROM course 
                INNER JOIN department ON department.dept_id = course.dept_id";
$res = mysqli_query($conn,$course_dept);

$course_array = array();

while ($row = mysqli_fetch_assoc($res)) {
    $course_array[] = $row;
}


 echo json_encode($course_array);

?>