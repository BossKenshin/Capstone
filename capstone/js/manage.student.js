
setStudentTable();


//seting department table
function setStudentTable() {

    $(document).ready(function () {

        $.ajax({
            url: "./sql_functions/fetch.student.php",
            success: function (data) {

                 var deptData = JSON.parse(data);

                //  console.log(deptData);

                 $('#studentTable').DataTable({
                    data: deptData,
                    columns: [
                        { data: 'id', },
                        { data: 'student_schoolid' },
                        { data: 'student_firstname' },
                        { data: 'student_middlename' },
                        { data: 'student_lastname' },
                        { data: 'dept' },
                        { data: 'course' },
                        {
                            data: 'null',
                            className: "view btn-outline-dark",
                            defaultContent: '<i class="bi bi-search"></i>',
                            orderable: false
                        },
                        {
                            data: 'null',
                            className: "edit btn-outline-dark",
                            defaultContent: '<i class="bi bi-pencil-square"></i>',
                            orderable: false
                        },
                        {
                            data: 'null',
                            className: "delete btn-outline-dark",
                            defaultContent: '<i class="bi bi-trash3"></i>',
                            orderable: false
                        }
                    ]
                });

            }
        })


    });
}

$("#btnNewStudentModal").click(function(){

    _deptDropdown();

});


$("#addNewStudent").click(function(){


    var student_schoolid = $("#sid").val();
    var student_firstname = $("#fname").val();
    var student_middlename = $("#mname").val();
    var student_lastname = $("#lname").val();
    var dept = $("#chooseDept").val();
    var course = $("#chooseCourse").val();

   // console.log(student_schoolid + " " + student_firstname + " " + student_middlename + " " + student_lastname + " " + dept + " " + course);

    if(student_firstname != "" && student_middlename != "" && student_lastname != "" && student_schoolid != "" && dept != "" && dept != 0 && course != "" && course != 0){

    $.ajax({

        url: "./sql_functions/add.student.php",
        type: "GET",
        data: {
            sid     : student_schoolid,
            sfn     : student_firstname,
            smn     : student_middlename,
            sln     : student_lastname,
            dept    : dept,
            course  : course
        }
    }).done(
        function (data) {

           let result = JSON.parse(data);

           if (result.res == "success") {

               $('#studentTable').DataTable().clear().destroy();
               setStudentTable();

               $("#newStudentForm").modal('hide')
               $("#sid").val('');
               $("#fname").val('');
               $("#mname").val('');
               $("#lname").val('');
               $("#chooseDept").val("0");
               $("#chooseCourse").val("0");;

           } else {
               Swal.fire({
                   icon: 'error',
                   title: 'Oops...',
                   text: 'Duplicate course or course abbreviation detected',

               })
           }


        });

    }
    else{

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill in the missing details!!',

        })

    }


});


function _deptDropdown() {
    $(document).ready(function () {
        $.ajax({
            url: "./sql_functions/fetch.department.php",
            success: function (data) {
                var result = JSON.parse(data);
                // alert("done saving data");
                    var element = document.getElementById("chooseDept");

                    $("#chooseDept").empty();


                    let ops = document.createElement("option");
                    ops.value =  '0';
                    ops.hidden = true;
                    ops.innerHTML = "Select Department";
                    element.appendChild(ops);

                    

                    for (var i = 0; i < result.length; i++) {
                        let op = document.createElement("option");



                        if (result[i].dept_name != "Unassigned" && result[i].dept_name != "Resigned") {
                            op.value = result[i].dept_id;
                            op.textContent = result[i].dept_name;

                            element.append(op);
                        }


                    }
            }
        })
    });
}


$( "#chooseDept" ).change(function () {
    $( "#chooseDept option:selected" ).each(function() {

      // state here what happens if the selected option is selected
      var dept_id = $(this).val();
      var dept_name = $(this).text();

      var elementDropdown = document.getElementById("chooseDept");

     _courseDropdown(dept_name);

    });

  })
  .change();



  

$( "#updatechooseDept" ).change(function () {
    $( "#updatechooseDept option:selected" ).each(function() {

      // state here what happens if the selected option is selected
      var dept_id = $(this).val();
      var dept_name = $(this).text();

      var elementDropdown = document.getElementById("updatechooseDept");

     _updatecourseDropdown(dept_name);

    });

  })
  .change();




function _courseDropdown(department) {
    $(document).ready(function () {
        $.ajax({
            url: "./sql_functions/fetch.course.php",
            success: function (data) {
                var result = JSON.parse(data);
                // alert("done saving data");


                var element = document.getElementById("chooseCourse");

                $("#chooseCourse").empty();


                let ops = document.createElement("option");
                ops.value =  '0';
                ops.innerHTML = "Choose Course";
                element.appendChild(ops);

                

                for (var i = 0; i < result.length; i++) {
                    let op = document.createElement("option");


                    if(result[i].dept == department) {
                        op.value = result[i].course_id;
                        op.textContent = result[i].course_abbreviation;

                        element.append(op);
                    
                    }

                }
            }
        })
    });
}


function _updatecourseDropdown(department) {
    $(document).ready(function () {
        $.ajax({
            url: "./sql_functions/fetch.course.php",
            success: function (data) {
                var result = JSON.parse(data);
                // alert("done saving data");


                var element = document.getElementById("updatechooseCourse");

                $("#updatechooseCourse").empty();


                let ops = document.createElement("option");
                ops.value =  '0';
                ops.innerHTML = "Choose Course";
                element.appendChild(ops);

                

                for (var i = 0; i < result.length; i++) {
                    let op = document.createElement("option");


                    if(result[i].dept == department) {
                        op.value = result[i].course_id;
                        op.textContent = result[i].course_abbreviation;

                        element.append(op);
                    
                    }

                }
            }
        })
    });
}



$('#studentTable').on('click', 'td.edit', function (e) {

    var currentRow = $(this).closest("tr");

    var col1 = currentRow.find("td:eq(0)").text(); // get current row 1st TD value
    var col2 = currentRow.find("td:eq(1)").text(); // get current row 2nd TD
    var col3 = currentRow.find("td:eq(2)").text(); // get current row 3rd TD
    var col4 = currentRow.find("td:eq(3)").text(); // get current row 4th TD
    var col5 = currentRow.find("td:eq(4)").text(); // get current row 5th TD
    var col6 = currentRow.find("td:eq(5)").text(); // get current row 6th TD
    var col7 = currentRow.find("td:eq(6)").text(); // get current row 7th TD



    // var data = col1 + "\n" + col2 + "\n" + col3;
    populateDeptDropdown(col7,col6);

    $("#updateStudentForm").modal('show')

    document.querySelector("#suid").value = col1;
    document.querySelector("#updatesid").value = col2;
    document.querySelector("#updatefname").value = col3;
    document.querySelector("#updatemname").value = col4;
    document.querySelector("#updatelname").value = col5;
    document.querySelector("#updatechooseDept").value = col6;
    document.querySelector("#updatechooseCourse").value = col7;


    //alert(data);
});





function populateDeptDropdown(course, oldDept) {
    $(document).ready(function () {
        $.ajax({
            url: "./sql_functions/fetch.department.php",
            success: function (data) {
                var result = JSON.parse(data);
                // alert("done saving data");

                    var deID ;
                    var element = document.getElementById("updatechooseDept");

                    $("#updatechooseDept").empty();

                    for (var i = 0; i < result.length; i++) {
                        let op = document.createElement("option");

                        if (result[i].dept_name != "Unassigned" && result[i].dept_name != "Resigned") {


                            op.value = result[i].dept_id;
                            op.textContent = result[i].dept_name;

                            if (oldDept == result[i].dept_abbreviation) {
                                deID = result[i].dept_id;
                                op.setAttribute("selected", "selected");
                            }

                            element.append(op);

                        }

                    }

                    populateCourseDropdown(course, deID);
            }
        })
    });
}


function populateCourseDropdown(course, id) {
    $(document).ready(function () {
        $.ajax({
            url: "./sql_functions/fetch.course.php",
            success: function (data) {
                var result = JSON.parse(data);
                // alert("done saving data");


                    var element = document.getElementById("updatechooseCourse");

                    $("#updatechooseCourse").empty();

                    for (var i = 0; i < result.length; i++) {
                        let op = document.createElement("option");

                        if(result[i].dept_id == id){
                            op.value = result[i].course_id;
                            op.textContent = result[i].course_abbreviation;
                            if (course == result[i].course_abbreviation) {
                                op.setAttribute("selected", "selected");
                            }

                            element.append(op);
                        }
                        
                    }

            }
        })
    });
}


$("#updateStudent").click(function(){

    var suid = $("#suid").val();
    var student_schoolid = $("#updatesid").val();
    var student_firstname = $("#updatefname").val();
    var student_middlename = $("#updatemname").val();
    var student_lastname = $("#updatelname").val();
    var dept = $("#updatechooseDept").val();
    var course = $("#updatechooseCourse").val();

   // console.log(student_schoolid + " " + student_firstname + " " + student_middlename + " " + student_lastname + " " + dept + " " + course);

    if(suid != "" &&  student_firstname != "" && student_middlename != "" && student_lastname != "" && student_schoolid != "" && dept != "" && dept != 0 && course != "" && course != 0){

    $.ajax({

        url: "./sql_functions/update.student.php",
        type: "GET",
        data: {
            id      : suid,
            sid     : student_schoolid,
            sfn     : student_firstname,
            smn     : student_middlename,
            sln     : student_lastname,
            dept    : dept,
            course  : course
        }
    }).done(
        function (data) {

           let result = JSON.parse(data);

           if (result.res == "success") {

               $('#studentTable').DataTable().clear().destroy();
               setStudentTable();

               $("#updateStudentForm").modal('hide')
               $("#updatesid").val('');
               $("#updatefname").val('');
               $("#updatemname").val('');
               $("#updatelname").val('');
               $("#updatechooseDept").val("0");
               $("#updatechooseCourse").val("0");;

           } else {
               Swal.fire({
                   icon: 'error',
                   title: 'Oops...',
                   text: 'Duplicate course or course abbreviation detected',

               })
           }


        });

    }
    else{

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill in the missing details!!',

        })

    }


});





$('#studentTable').on('click', 'td.delete', function (e) {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })



    swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {



            var currentRow = $(this).closest("tr");

            var col1 = currentRow.find("td:eq(0)").text(); // get current row 1st TD value
       

            $.ajax({
                url: "./sql_functions/delete.student.php",
                type: "GET",
                data: {
                    id: col1,
                }
            })
                .done(function (data) {
                    let result = JSON.parse(data);

                    if (result.res == "success") {
                        // alert("done saving data");

                        $('#studentTable').DataTable().clear().destroy();
                        setStudentTable();
                    } else {
                        alert("Error, Something happened");
                    }
                });


            swalWithBootstrapButtons.fire(
                'Deleted!',
                'The student data has been deleted.',
                'success'
            )
        } 
    })


    //alert(data);
});

let selectedFile;
var sidObject;

      document
        .getElementById("fileExcel")
        .addEventListener("change", (event) => {
          selectedFile = event.target.files[0];
        });

      document.getElementById("convert").addEventListener("click", () => {

        if (selectedFile) {
            var sidLength;

            $.ajax({
                url: "./sql_functions/get_school_id.php",
                success: function (data) {
                    sidObject = JSON.parse(data);
                    


                    $("#listOfNew").empty();


                    let fileReader = new FileReader();
                    fileReader.readAsBinaryString(selectedFile);
                    fileReader.onload = (event) => {
                        let data = event.target.result;
                        let workbook = XLSX.read(data, {type:"binary"});
                        workbook.SheetNames.forEach( sheet =>{
                            let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
        
                           // document.getElementById("listofNew").innerHTML = JSON.stringify(rowObject);
                            console.log(rowObject);
                            console.log(sidObject);
        
        
                            for(var i = 0 ; i < rowObject.length; i++){
        
                                for(var j=0 ; j<sidObject.length; j++){
        
                                    if(rowObject[i].SchoolID != sidObject[j].student_schoolid){

                                        $("#listOfNew").append($("<li>").text(rowObject[i].Firstname));

                                        console.log(rowObject[i].Firstname + " is New");
                                    }
                                    else{
                                        $("#listOfExisting").append($("<li>").text(rowObject[i].Firstname));

                                        console.log(rowObject[i].Firstname + " is Existing");
        
                                    }
        
                                }
                            }
        
                          
        
        
        
                         
        
                            });
                    }

                }
                });

       

        }
      });
    


      function fetchSchoolId(){
       
      }