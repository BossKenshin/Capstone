<?php

include '/xampp/htdocs/capstone/dbconnect.php';

$year = str_replace( "'" ,"''",htmlspecialchars($_GET['year']));
$course = str_replace( "'" ,"''",htmlspecialchars($_GET['course']));
$section = str_replace( "'" ,"''",htmlspecialchars($_GET['section']));


$student = "SELECT  `student_schoolid` as school_id, CONCAT(`student_firstname`,' ',`student_middlename`,' ',`student_lastname`) AS fullname
FROM student 	
INNER JOIN course ON student.student_courseID = course.course_id
WHERE course.course_abbreviation = '$course' AND section = '$section' AND year_level LIKE '$year%' ;";

$res = mysqli_query($conn,$student);

$student_arr = array();

while ($row = mysqli_fetch_assoc($res)) {
    $student_arr[] = $row;
}


 echo json_encode($student_arr);

?>