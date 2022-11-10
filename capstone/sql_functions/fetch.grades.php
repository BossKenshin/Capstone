<?php

include '/xampp/htdocs/capstone/dbconnect.php';

$sid = str_replace( "'" ,"''",htmlspecialchars($_GET['stuid']));
$sy = str_replace( "'" ,"''",htmlspecialchars($_GET['sy']));
$sem = str_replace( "'" ,"''",htmlspecialchars($_GET['sem']));



$grades_info = "SELECT CONCAT(student_firstname,' ', student_middlename,' ',student_lastname) as fullname,
                subject.subject_name,subject.subject_code, school_year, semester, grade FROM grades
                INNER JOIN student ON grades.student_id = student.student_id
                INNER JOIN subject ON grades.subject_id = subject.subject_id
                WHERE student.student_schoolid = '$sid'AND school_year = '$sy' AND semester = '$sem'";

$res = mysqli_query($conn,$grades_info);

$course_array = array();

while ($row = mysqli_fetch_assoc($res)) {
    $course_array[] = $row;
}


 echo json_encode($course_array);



?>