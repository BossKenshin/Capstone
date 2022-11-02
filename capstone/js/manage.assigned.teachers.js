setAssignedTeacherTable();

function setAssignedTeacherTable() {

    $(document).ready(function () {

        $.ajax({
            url: "./sql_functions/fetch.assigned.teacher.php",
            success: function (data) {
               var assignedData = JSON.parse(data);
                $('#assignedTeacherTable').DataTable({
                    data: assignedData,
                    columns: [
                        { data: 'assigned_id', },
                        { data: 'subject_name' },
                        { data: 'teacher_name' },
                        { data: 'course_abbreviation' },
                        { data: 'school_year' },    
                        { data: 'year_level' },
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

$('#btn-ass-teacher').on('click', function (e) {
    var element = 'chooseDept';
    _deptDropdown();   
    $("#chooseTeacher").empty();
    $("#chooseSubject").empty();
    $("#chooseCourse").empty();
})



$('#assignedTeacherTable').on('click', 'td.edit', function (e) {

    var currentRow = $(this).closest("tr");

    $("#updateAsssignTeacherForm").modal('show');

    // var col1 = currentRow.find("td:eq(0)").text(); // get current row 1st TD value
    // var col2 = currentRow.find("td:eq(1)").text(); // get current row 2nd TD



    // var data = col1 + "\n" + col2 + "\n" + col3;


    // document.querySelector("#sid").value = col1;
    // document.querySelector("#updateSubjectName").value = col2;

    //alert(data);
    dp_ele = 'chooseDeptNew';
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
                    ops.value =  'Select Department';
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

     _teacherDropdown(dept_name);

    });

  })
  .change();



  

function _teacherDropdown(_dept) {
    $(document).ready(function () {
        $.ajax({
            url: "./sql_functions/fetch.teacher.php",
            success: function (data) {
                var result = JSON.parse(data);
                // alert("done saving data");


          
                    var element = document.getElementById("chooseTeacher");

                    $("#chooseTeacher").empty();

                    for (var i = 0; i < result.length; i++) {
                        let op = document.createElement("option");

                        if (result[i].dept != "Unassigned" && result[i].dept != "Resigned" && result[i].dept == _dept) {
                            op.value = result[i].teacher_id;
                            var tfn = result[i].teacher_firstname + ' ' + result[i].teacher_middlename + ' ' + result[i].teacher_lastname;

                            op.textContent = tfn;
                            element.append(op);
                        }
                    }



            }
        })
    });


    _subjectDropdown();
}


function _subjectDropdown() {

    $(document).ready(function () {

        $.ajax({
            url: "./sql_functions/fetch.subject.php",
            success: function (data) {
              var  result =  JSON.parse(data);
        
                var element = document.getElementById("chooseSubject");

                $("#chooseSubject").empty();


                let ops = document.createElement("option");
                ops.value =  'Select Subject';
                ops.hidden = true;
                ops.innerHTML = "Choose Subject";
                element.appendChild(ops);

                

                for (var i = 0; i < result.length; i++) {
                    let op = document.createElement("option");



                        op.value = result[i].subject_id;
                        op.textContent = result[i].subject_name;

                        element.append(op);
                    


                }
            }
        })


    });
    _courseDropdown();
}



function _courseDropdown() {
    $(document).ready(function () {
        $.ajax({
            url: "./sql_functions/fetch.course.php",
            success: function (data) {
                var result = JSON.parse(data);
                // alert("done saving data");


                var element = document.getElementById("chooseCourse");

                $("#chooseCourse").empty();


                let ops = document.createElement("option");
                ops.value =  'Select Course';
                ops.hidden = true;
                ops.innerHTML = "Choose Course";
                element.appendChild(ops);

                

                for (var i = 0; i < result.length; i++) {
                    let op = document.createElement("option");



                        op.value = result[i].course_id;
                        op.textContent = result[i].course_abbreviation;

                        element.append(op);
                    


                }
            }
        })
    });
}




function _setdeptDropdown() {
    $(document).ready(function () {
        $.ajax({
            url: "./sql_functions/fetch.department.php",
            success: function (data) {
                var result = JSON.parse(data);
                // alert("done saving data");


          
                    var element = document.getElementById("chooseDeptNew");

                    $("#chooseDeptNew").empty();


                    let ops = document.createElement("option");
                    ops.value =  'Select Department';
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