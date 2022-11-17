<?php

include 'dbconnect.php';

include 'import.subject.modal.php';

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Manage Subjects</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="style/system.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js" integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <link rel="stylesheet" href="http://cdn.datatables.net/1.10.2/css/jquery.dataTables.min.css">
    <script type="text/javascript" src="http://cdn.datatables.net/1.10.2/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.16.2/xlsx.full.min.js" integrity="sha512-qilAGdDSZ5c0sTjizcSCffmIb8D2rHttMYGUxtI3OFn8lB29BlU2tEUcPesHHLQ2t0Y5TInglWKY6V3GoSK0IA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>  


</head>

<body>



<div class="modal fade" id="newSubjectForm" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">New Subject</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <div class="container">
                        <label for="subjectname">Subject Name</label>
                        <input class="form-control mb-2 newdept" type="text" id="subjectname" placeholder="Name..." aria-label="default input example" required>
                        
                        <label for="subjectcode">Subject Code</label>
                        <input class="form-control mb-2 newdept" type="text" id="subjectcode" placeholder="Code..." aria-label="default input example" required>
                        
                        <label for="chooseDept"> Department</label>
                        <select class="form-select" aria-label="Default select example" id="chooseDept" >
                        </select>                 

                        <label for="chooseCourse"> Course</label>
                        <select class="form-select" aria-label="Default select example" id="chooseCourse">
                        <option selected value="0">Open this select course</option>
                        </select>

                        
                        <label for="chooseYear">Year Level</label>
                        <select  id="chooseYear" class="form-select">
                            <option value="1st" class="optionYear">1st</option>
                            <option value="2nd" class="optionYear">2nd</option>
                            <option value="3rd" class="optionYear">3rd</option>
                            <option value="4th" class="optionYear">4th</option>

                        </select>

                        <label for="chooseSem">Semester</label>
                        <select  id="chooseSem" class="form-select">
                            <option value="1st" class="optionSem">1st</option>
                            <option value="2nd" class="optionSem">2nd</option>
                            <option value="Summer" class="optionSem">Summer</option>

                        </select>

                        <br>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" id="addNewSubject">Save</button>
                    </div>
                </div>

            </div>
        </div>
    </div>


    

<div class="modal fade" id="updateSubjectForm" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">New Subject</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <div class="container">
                        <input type="hidden" name="sid" id="sid">
                        <label for="updateSubjectName">Subject Name</label>
                        <input class="form-control mb-2 newdept" type="text" id="updateSubjectName" placeholder="Name..." aria-label="default input example" required>

                        <label for="updateSubjectCode">Subject Code</label>
                        <input class="form-control mb-2 newdept" type="text" id="updateSubjectCode" placeholder="Name..." aria-label="default input example" required>
                        
                        <label for="chooseUpdateDept"> Department</label>
                        <select class="form-select" aria-label="Default select example" id="chooseUpdateDept" >
                        </select>      
                        

                        <label for="chooseUpdateCourse"> Course</label>
                        <select class="form-select" aria-label="Default select example" id="chooseUpdateCourse">
                        <option selected value="0">Open this select course</option>
                        </select>


                        <label for="chooseUpdateYear">Year Level</label>
                        <select id="chooseUpdateYear" class="form-select">
                            <option value="1st" class="optionYear">1st</option>
                            <option value="2nd" class="optionYear">2nd</option>
                            <option value="3rd" class="optionYear">3rd</option>
                            <option value="4th" class="optionYear">4th</option>

                        </select>

                        <label for="chooseUpdateSem">Semester</label>
                        <select id="chooseUpdateSem" class="form-select">
                            <option value="1st" class="optionSem">1st</option>
                            <option value="2nd" class="optionSem">2nd</option>
                            <option value="Summer" class="optionSem">Summer</option>

                        </select>
                       
                        <br>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" id="updateSubject">Save</button>
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
                <p class="h4">Manage Subjects</p>
                <hr>
            </div>

            <div class="container-fluid pt-4 pb-3" id="btn-container">
                <button type="button" class="btn btn-success me-5" data-bs-toggle="modal" id="btn-new-subject" data-bs-target="#newSubjectForm" ><i class="bi bi-plus-circle"></i> Subject</button>
                <!-- <button class="btn btn-info me-1"><i class="bi bi-file-earmark-spreadsheet-fill" data-toggle="tooltip" data-placement="bottom" title="Import table"></i></button> -->

                <button class="btn btn-outline-dark me-5" data-bs-toggle="modal" data-toggle="tooltip" data-placement="bottom" title="Import Excel" data-bs-target="#modalForSubjectExcel" id="modalExcelImportBtn"> <i class="bi bi-file-earmark-arrow-up-fill"></i></button>

                <button class="btn btn-dark float-end" data-toggle="tooltip" id="btn-refresh-subject" data-placement="left" title="Refresh Table"><i class="bi bi-arrow-clockwise"></i></button>

            </div>

            <div class="container bg-light " id="box-content">

            <table id="subjectTable" class="display text-center" width="100%">
            <thead>
                        <tr>
                            <th>Subject ID</th>
                            <th>Subject Code</th>
                            <th>Subject</th>
                            <th>Department</th>
                            <th>Course</th>
                            <th>Year Level</th>
                            <th>Semester</th>
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




    <script src="js/manage.subject.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossorigin="anonymous"></script>



</html>