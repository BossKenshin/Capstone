<?php

include 'dbconnect.php';



?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Manage Students</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="style/system.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js" integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <link rel="stylesheet" href="http://cdn.datatables.net/1.10.2/css/jquery.dataTables.min.css">
    </style>
    <script type="text/javascript" src="http://cdn.datatables.net/1.10.2/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.16.2/xlsx.full.min.js" integrity="sha512-qilAGdDSZ5c0sTjizcSCffmIb8D2rHttMYGUxtI3OFn8lB29BlU2tEUcPesHHLQ2t0Y5TInglWKY6V3GoSK0IA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>  

</head>

<body>

<?php

include 'import.student.modal.php';



?>

    <div class="modal fade" id="newStudentForm" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">New Student</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <div class="container">
                   
                        <label for="fname">Firstname</label>
                        <input class="form-control mb-2 newdept" type="text" id="fname" placeholder="Firstname..." aria-label="default input example" required>

                        <label for="mname"> Middlename</label>
                        <input class="form-control mb-2 newdept" type="text" id="mname" placeholder="Middlename..." aria-label="default input example" required>

                        <label for="lname"> Lastname </label>
                        <input class="form-control mb-2 newdept" type="text" id="lname" placeholder="Lastname..." aria-label="default input example" required>

                        <label for="sid">School ID</label>
                        <input class="form-control mb-2 newdept" type="number" id="sid" placeholder="School ID..." aria-label="default input example" required>
                        
                        <label for="chooseDept"> Department</label>
                        <select class="form-select" aria-label="Default select example" id="chooseDept" >
                        </select>                 

                        <label for="chooseCourse"> Course</label>
                        <select class="form-select" aria-label="Default select example" id="chooseCourse">
                        <option selected value="0">Open this select course</option>
                        </select> 

                        <label for="YearLevel"> Year Level</label>
                        <select class="form-select" aria-label="Default select example" id="YearLevel">
                        <option selected value="1st Year">1st Year</option>
                        <option  value="2nd Year">2nd Year</option>
                        <option  value="3rd Year">3rd Year</option>
                        <option  value="4th Year">4th Year</option>
                        </select> 

                        <br>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" id="addNewStudent">Save</button>
                    </div>
                </div>

            </div>
        </div>
    </div>


    <div class="modal fade" id="updateStudentForm" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Update Department</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <div class="container">

                        <input type="text" hidden name="studentID" id="suid">

                        <label for="updatefname">Firstname</label>
                        <input class="form-control mb-2 newdept" type="text" id="updatefname" placeholder="Firstname..." aria-label="default input example" required>

                        <label for="updatemname"> Middlename</label>
                        <input class="form-control mb-2 newdept" type="text" id="updatemname" placeholder="Middlename..." aria-label="default input example" required>

                        <label for="updatelname"> Lastname </label>
                        <input class="form-control mb-2 newdept" type="text" id="updatelname" placeholder="Lastname..." aria-label="default input example" required>

                        <label for="updatesid">School ID</label>
                        <input class="form-control mb-2 newdept" type="number" id="updatesid" placeholder="School ID..." aria-label="default input example" required>
                        
                        <label for="updatechooseDept"> Department</label>
                        <select class="form-select" aria-label="Default select example" id="updatechooseDept" >
                        </select>                 

                        <label for="updatechooseCourse"> Course</label>
                        <select class="form-select" aria-label="Default select example" id="updatechooseCourse">
                        <option selected value="0">Open this select course</option>
                        </select> 

                        <label for="updateYearLevel"> Year Level</label>
                        <select class="form-select" aria-label="Default select example" id="updateYearLevel">
                        <option selected value="1st Year">1st Year</option>
                        <option  value="2nd Year">2nd Year</option>
                        <option  value="3rd Year">3rd Year</option>
                        <option  value="4th Year">4th Year</option>
                        </select> 

                        <br>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" id="updateStudent">Save</button>
                   
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
                <p class="h4">Manage Students</p>
                <hr>
            </div>

            <div class="container-fluid pt-4 pb-3" id="btn-container">
                <button type="button" class="btn btn-success me-5" data-bs-toggle="modal" id="btnNewStudentModal" data-bs-target="#newStudentForm"><i class="bi bi-plus-circle"></i> Student</button>
                <!-- <button class="btn btn-info me-1"><i class="bi bi-file-earmark-spreadsheet-fill" data-toggle="tooltip" data-placement="bottom" title="Import table"></i></button> -->
                <button class="btn btn-outline-dark me-5" data-bs-toggle="modal" data-toggle="tooltip" data-placement="bottom" title="Import Excel" data-bs-target="#modalForStudentExcel" id="modalExcelImportBtn"> <i class="bi bi-file-earmark-arrow-up-fill"></i></button>
              
                <button class="btn btn-dark float-end" data-toggle="tooltip" id="btn-refresh" data-placement="left" title="Refrest Table"><i class="bi bi-arrow-clockwise"></i></button>


            </div>

            <div class="container bg-light " id="box-content">

            <table id="studentTable" class="display text-center" width="100%">
            <thead>
                        <tr>
                            <th>Student ID</th>
                            <th>Student School ID</th>
                            <th>Firstname</th>
                            <th>Middlename</th>
                            <th>Lastname</th>
                            <th>Department</th> 
                            <th>Course</th> 
                            <th>Year</th> 
                            <th></th>
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




    <script src="js/manage.student.js"></script>
    <script src="js/export.table.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossorigin="anonymous"></script>



</html>