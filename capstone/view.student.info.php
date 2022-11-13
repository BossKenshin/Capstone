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

   
    <div class="container-fluid row" id="whole-container">

        <div class="col-2" id="sidebar">

            <?php include './config/sidebar.php'    ?>


        </div>
        <div class="col-10 " id="content">

            <div class="container-fluid" id="samp-header">
                <p class="h4">Grades Info</p>
                <hr>
            </div>

            <div class="container bg-light " id="box-content">
                <p class="h5 m-3" id="sid"></p>
                <p class="h5 m-3 mb-5" id="_courseYear"></p>


            <table id="gradesTable" class="display text-center" width="100%">

            <div class="container row mb-5">

            <div class="col-2">
                 <label for="_schoolyear"> School Year</label>
                        <select class="form-select" aria-label="Default select example" id="_schoolyear" >
                        </select>   
            </div>

            <div class="col-2">
                <label for="_semester">Semester</label>
                        <select class="form-select " aria-label="Default select example" id="_semester" >
                            <option value="1" selected>1st Semester</option>
                            <option value="2" >2nd Semester</option>
                            <option value="3">Summer</option>

                        </select>     
                 </div>

                 <div class="col-2 mt-4">
                    <button class="btn btn-primary" id="_filtergrades">Filter</button>
                 </div>
            </div>

                       
                        
                         

            <thead>
                        <tr>
                            <th>Subject Code</th>
                            <th>Subject Name</th> 
                            <th>Final Grade</th>
                        </tr>
                    </thead>

                    <tbody>
                    
                    </tbody>


            </table>

           

            </div>


        </div>

    </div>

    <script src="js/view.info.js"></script>


    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossorigin="anonymous"></script>



</html>