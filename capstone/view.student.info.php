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
    <script type="text/javascript" src="http://cdn.datatables.net/1.10.2/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.16.2/xlsx.full.min.js" integrity="sha512-qilAGdDSZ5c0sTjizcSCffmIb8D2rHttMYGUxtI3OFn8lB29BlU2tEUcPesHHLQ2t0Y5TInglWKY6V3GoSK0IA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>  

</head>

<body>

<?php

include 'import.student.modal.php';



?>

   
<template id="template" >
<tr id="data-row">
    <td class="data" id="subCode">asdf</td>
    <td class="data" id="subject">asdf</td>

    <td class="data" id="Grade">NG</td>
</tr>

</template>

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


            <table id="gradesTable" class="table table-striped display text-center" width="100%">

            <div class="container row mb-5">

            <div class="col-2">
            <select name="year" id="yearDropdown" class="form-select form-select mb-3 ">
    <option value="1st" class="yearOption">1st Year</option>
    <option value="2nd"  class="yearOption">2nd Year</option>
    <option value="3rd" class="yearOption">3rd Year</option>
    <option value="4th" class="yearOption">4th Year</option>
</select>
            </div>

            <div class="col-2">
            <select name="sem" id="semDropdown" class="form-select form-select mb-3">
    <option value="1st " class="semOption">1st </option>
    <option value="2nd " class="semOption">2nd </option>
    <option value="Summer" class="semOption">Summer</option>
</select>
                 </div>

                 <div class="col-2 ">
                    <button class="btn btn-primary" id="_filtergrades" onclick="loadSubjects()">Filter</button>
                 </div>
            </div>

                       
                        
                         

            <thead>
                        <tr>
                            <th>Subject Code</th>
                            <th>Subject</th>
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