<?php

include '/xampp/htdocs/capstone/dbconnect.php';

$sid = str_replace( "'" ,"''",htmlspecialchars($_GET['stuid']));




$grades_info = "SELECT DISTINCT school_year FROM grades
                INNER JOIN student ON grades.student_id = student.student_id
                WHERE student.student_schoolid = '$sid' ORDER BY school_year DESC";

$res = mysqli_query($conn,$grades_info);

$course_array = array();

while ($row = mysqli_fetch_assoc($res)) {
    $course_array[] = $row;
}


 echo json_encode($course_array);



?>