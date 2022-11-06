<?php

include '/xampp/htdocs/capstone/dbconnect.php';

if(isset($_POST["data"]))
{
    $data = json_decode($_POST["data"]);

    $myarray = $data->myarray;

    $dataArray = array();

    foreach($myarray as $singular)
    {
            $dataArray[] = $singular;
    }

    echo json_encode($dataArray);

}

?>