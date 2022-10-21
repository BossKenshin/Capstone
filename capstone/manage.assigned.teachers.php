<?php

include 'dbconnect.php';



?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Manage Assigned</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="style/system.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js" integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <link rel="stylesheet" href="http://cdn.datatables.net/1.10.2/css/jquery.dataTables.min.css">
    </style>
    <script type="text/javascript" src="http://cdn.datatables.net/1.10.2/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>

</head>

<body>

    <div class="container-fluid row" id="whole-container">

        <div class="col-2" id="sidebar">

            <?php include './config/sidebar.php'    ?>


        </div>
        <div class="col-10 " id="content">

            <div class="container-fluid" id="samp-header">
                <p class="h4">Manage Assigned Teachers</p>
                <hr>
            </div>

            <div class="container-fluid pt-4 pb-3" id="btn-container">
            <button type="button" class="btn btn-success me-5" data-bs-toggle="modal" data-bs-target="#newAssignTeacherForm" ><i class="bi bi-plus-circle"></i> Assign a Teacher</button>

                <!-- <button class="btn btn-info me-1"><i class="bi bi-file-earmark-spreadsheet-fill" data-toggle="tooltip" data-placement="bottom" title="Import table"></i></button> -->

                <button class="btn btn-dark float-end" data-toggle="tooltip" id="btn-refresh-assigneTeacherTable" data-placement="left" title="Refresh Table"><i class="bi bi-arrow-clockwise"></i></button>

            </div>

            <div class="container bg-light " id="box-content">

            <table id="assignedTeacherTable" class="display text-center" width="100%">
            <thead>
                        <tr>
                            <th>Assigned ID</th>
                            <th>Subject Name</th>
                            <th>Assigned Teacher</th>
                            <th>Course</th>
                            <th>School Year</th>
                            <th>Year Level</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                    
                    </tbody>
            </table>
            </div>
        </div>

    </div>




    <script src="js/manage.assigned.teachers.js"></script>
    <script src="js/export.table.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossorigin="anonymous"></script>



</html>