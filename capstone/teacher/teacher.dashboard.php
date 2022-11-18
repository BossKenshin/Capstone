<?php


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
    <link rel="stylesheet" href="system.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js" integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <link rel="stylesheet" href="http://cdn.datatables.net/1.10.2/css/jquery.dataTables.min.css">
    <script type="text/javascript" src="http://cdn.datatables.net/1.10.2/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>

</head>

<body>





    <div class="container-fluid row" id="whole-container">

        <div class="col-2" id="sidebar">

            <?php include '/xampp/htdocs/capstone/config/teacher.sidebar.php'    ?>


        </div>

        <div class="col-10 " id="content">

            <div class="container-fluid" id="samp-header">
                <p class="h4">Students List</p>
                <hr>
            </div>

            <div class="row container-fluid pt-4 pb-3" id="btn-container">
                <p class="h5" id="StudentCourse">BSIT</p>

                <div class="col-2">
                    <label for="StudentYear">Year Level</label>

                    <select name="" id="StudentYear" class="form-select">

                        <option value="1st" selected class="syl">1st Year</option>
                        <option value="2nd" class="syl">2nd Year</option>
                        <option value="3rd" class="syl">3rd Year</option>
                        <option value="4th" class="syl">4th Year</option>
                    </select>
                </div>

                <div class="col-2">

                    <label for="StudentSection">Section</label>
                    <select name="" id="StudentSection" class="form-select">

                    
                    </select>
                </div>

                <div class="col-8 mt-4">
                    <label for="filterStudents">Click to see Student list</label>
                    <button class="btn btn-primary" id="filterStudents" >List</button>

                    <button class="btn btn-dark float-end" data-toggle="tooltip" id="btn-export-teacher" onclick="exportTableToExcel('studentList','StudentList')" data-placement="left" title="Export Table"><i class="bi bi-printer-fill"></i></button>

                </div>

                <div class="container bg-light mt-5 " id="box-content">

                    <table id="studentList" class="display text-center mt-4" width="100%">
                        <thead>
                            <tr>                                
                                <th>School ID</th>
                                <th>Fullname</th>
                                <th>Grade</th>
                            </tr>
                        </thead>

                        <tbody>

                        </tbody>


                    </table>



                </div>



            </div>


        </div>

    </div>




    <script src="./teacherjs/student.list.js"></script>
    <script src="./teacherjs//export.table.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossorigin="anonymous"></script>



</html>