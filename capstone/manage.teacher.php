<?php

include 'dbconnect.php';



?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Manage Teachers</title>
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



<div class="modal fade" id="newTeacherForm" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">New Teacher</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <div class="container">
                        <label for="tfirstname">Firstname</label>
                        <input class="form-control mb-2 newTeacher" type="text" id="tfirstname" placeholder="Firstname..." aria-label="default input example" required>

                        <label for="tlastname"> Lastname</label>
                        <input class="form-control mb-2 newTeacher" type="text" id="tlastname" placeholder="Lastname..." aria-label="default input example" required>

                        <label for="tmiddlename"> Middlename</label>
                        <input class="form-control mb-2 newTeacher" type="text" id="tmiddlename" placeholder="Middlename..." aria-label="default input example" required>

                        <label for="tusername"> Username</label>
                        <input class="form-control mb-2 newTeacher" type="text" id="tusername" placeholder="Username..." aria-label="default input example" required>

                        <label for="tpassword"> Password</label>
                        <input class="form-control mb-2 newTeacher" type="text" id="tpassword" placeholder="Password..." aria-label="default input example" required>


                        <label for="DeptSelectTeacher"> Department</label>
                        <select class="form-select" aria-label="Default select example" id="DeptSelectTeacher">
                        <option selected>Open this select menu</option>
                        </select>                   

                        <br>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" id="addNewTeacher">Save</button>
                    </div>
                </div>

            </div>
        </div>
    </div>


    <div class="modal fade" id="updateTeacherForm" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Update Teacher</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <div class="container">

                        <input type="hidden" name="tid" id="tID">

                        <label for="newtfn">Firstname</label>
                        <input class="form-control mb-2 newTeacher" type="text" id="newtfn" placeholder="Firstname..." aria-label="default input example" required>

                        <label for="newtln"> Lastname</label>
                        <input class="form-control mb-2 newTeacher" type="text" id="newtln" placeholder="Lastname..." aria-label="default input example" required>

                        <label for="newtmn"> Middlename</label>
                        <input class="form-control mb-2 newTeacher" type="text" id="newtmn" placeholder="Middlename..." aria-label="default input example" required>

                        <label for="newtus"> Username</label>
                        <input class="form-control mb-2 newTeacher" type="text" id="newtun" placeholder="Username..." aria-label="default input example" required>

                        <label for="newtps"> Password</label>
                        <input class="form-control mb-2 newTeacher" type="text" id="newtps" placeholder="Password..." aria-label="default input example" required>


                        <label for="newtdept"> Department</label>
                        <select class="form-select" aria-label="Default select example" id="newtdept">
                        <option selected>Open this select menu</option>
                        </select>                   

                        <br>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" id="updateTeacherBtn">Save</button>
                    </div>
                </div>

            </div>
        </div>
    </div>



    <div class="container-fluid row" id="whole-container">

        <div class="col-2" id="sidebar">

            <?php include './config/sidebar.php'    ?>


        </div>
        <div class="col-10 " id="content">

            <div class="container-fluid" id="samp-header">
                <p class="h4">Manage Teachers</p>
                <hr>
            </div>

            <div class="container-fluid pt-4 pb-3" id="btn-container">
                <button type="button" class="btn btn-success me-5" data-bs-toggle="modal" data-bs-target="#newTeacherForm" onclick="populateDeptDropdown('addTeacher', 'new')" ><i class="bi bi-plus-circle"></i>Teacher</button>
                <!-- <button class="btn btn-info me-1"><i class="bi bi-file-earmark-spreadsheet-fill" data-toggle="tooltip" data-placement="bottom" title="Import table"></i></button> -->

                <button class="btn btn-dark float-end" data-toggle="tooltip" id="btn-refresh-teacher" data-placement="left" title="Refrest Table"><i class="bi bi-arrow-clockwise"></i></button>

            </div>

            <div class="container bg-light " id="box-content">

            <table id="teacherTable" class="display text-center" width="100%">
            <thead>
                        <tr>
                            <th>Teacher ID</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Middle</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Department</th>
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




    <script src="js/manage.teacher.js"></script>
    <script src="js/export.table.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossorigin="anonymous"></script>



</html>