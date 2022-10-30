<?php
include '/xampp/htdocs/capstone/dbconnect.php';

$teacher = "SELECT`teacher_id`,`teacher_firstname`,`teacher_lastname`,`teacher_middlename`,`teacher_username`,`teacher_password`, department.dept_name as dept FROM teacher 
INNER JOIN department ON department.dept_id = teacher.dept_id;";
$res = mysqli_query($conn,$teacher);

$teacher_array = array();

while ($row = mysqli_fetch_assoc($res)) {
    $teacher_array[] = $row;
}


 echo json_encode($teacher_array);

?>