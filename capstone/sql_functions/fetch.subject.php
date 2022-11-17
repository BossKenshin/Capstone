<?php
include '/xampp/htdocs/capstone/dbconnect.php';



$fetch_sub = "SELECT `subject_id`,`subject_code`,`subject_name`, department.dept_abbreviation as dept_abb ,course.course_abbreviation as course,`year_level`, semester FROM `subject`
 INNER JOIN course ON subject.course_id = course.course_id
 INNER JOIN department ON course.dept_id = department.dept_id;";
$res = mysqli_query($conn,$fetch_sub);

$subject_array = array();

while ($row = mysqli_fetch_assoc($res)) {
    $subject_array[] = $row;
}


 echo json_encode($subject_array);

?>