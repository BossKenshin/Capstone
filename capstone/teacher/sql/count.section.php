<?php

include '/xampp/htdocs/capstone/dbconnect.php';

$year = str_replace( "'" ,"''",htmlspecialchars($_GET['year']));
$course = str_replace( "'" ,"''",htmlspecialchars($_GET['course']));


$section = "SELECT DISTINCT section
FROM student 	
INNER JOIN course ON student.student_courseID = course.course_id
WHERE course.course_abbreviation = '$course' AND year_level LIKE '$year%' ;";

$res = mysqli_query($conn,$section);

$sec = array();

while ($row = mysqli_fetch_assoc($res)) {
    $sec[] = $row;
}


 echo json_encode($sec);

?>