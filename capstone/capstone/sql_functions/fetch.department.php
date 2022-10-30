<?php
include '/xampp/htdocs/capstone/dbconnect.php';



$fetch_dept = "SELECT * FROM department";
$res = mysqli_query($conn,$fetch_dept);

$dept_array = array();

while ($row = mysqli_fetch_assoc($res)) {
    $dept_array[] = $row;
}


 echo json_encode($dept_array);

?>