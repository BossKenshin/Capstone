

var table;

var deptData;
var courseData;
var teachersData;

var tableRe;

setCourseTable();
setTeacherTable();




////////////////////////////////////////////////////////////// THIS IS FOR MANAGE COURSES  /////////////////////////////////////////////////////

///////////////////////////////////////////////////// Manage Teachers ///////////////////////////

//seting department table
function setTeacherTable() {

    $(document).ready(function () {

        $.ajax({
            url: "./sql_functions/fetch.teacher.php",
            success: function (data) {
                teachersData = JSON.parse(data);
                $('#teacherTable').DataTable({
                    data: teachersData,
                    columns: [
                        { data: 'teacher_id', },
                        { data: 'teacher_firstname' },
                        { data: 'teacher_lastname' },
                        { data: 'teacher_middlename' },
                        { data: 'teacher_username' },
                        { data: 'teacher_password' },
                        { data: 'dept' },
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


$('#teacherTable').on('click', 'td.delete', function (e) {
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
                url: "./sql_functions/delete.teacher.php",
                type: "GET",
                data: {
                    id: col1,
                }
            })
                .done(function (data) {
                    let result = JSON.parse(data);

                    if (result.res == "success") {
                        // alert("done saving data");

                        $('#teacherTable').DataTable().clear().destroy();
                        setTeacherTable();
                    } else {
                        alert("Error, Something happened");
                    }
                });


            swalWithBootstrapButtons.fire(
                'Deleted!',
                'success'
            )
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelled',
            )
        }
    })


    //alert(data);
});




function populateDeptDropdown(text, oldDept) {
    $(document).ready(function () {
        $.ajax({
            url: "./sql_functions/fetch.department.php",
            success: function (data) {
                var result = JSON.parse(data);
                // alert("done saving data");


                if (text == "UpdateTeacher") {
                    var element = document.getElementById("newtdept");

                    $("#newtdept").empty();

                    for (var i = 0; i < result.length; i++) {
                        let op = document.createElement("option");

                            op.value = result[i].dept_id;
                            op.textContent = result[i].dept_name;
                            if (oldDept == result[i].dept_name) {
                                op.setAttribute("selected", "selected");
                            }

                            element.append(op);
                        
                    }


                }
                else {
                    var element = document.getElementById("DeptSelectTeacher");

                    $("#DeptSelectTeacher").empty();

                    for (var i = 0; i < result.length; i++) {
                        let op = document.createElement("option");

                        op.value = result[i].dept_id;
                        op.textContent = result[i].dept_name;
                        element.append(op);
                        
                    }
                }

            }
        })
    });
}




//Adding new dept on button click

$("#addNewTeacher").click(function () {

    var teacherFn = document.getElementById("tfirstname").value;
    var teacherLn = document.getElementById("tlastname").value;
    var teacherMn = document.getElementById("tmiddlename").value;
    var teacherUsername = document.getElementById("tusername").value;
    var teacherPassword = document.getElementById("tpassword").value;
    var teacherDept = document.getElementById("DeptSelectTeacher").value;



    if (teacherFn != "" && teacherLn != "" && teacherMn != "" && teacherUsername != "" && teacherPassword !="" && teacherDept != "") {

        $.ajax({
            url: "./sql_functions/add.teacher.php",
            type: "GET",
            data: {
                fn: teacherFn,
                ln: teacherLn,
                mn: teacherMn,
                user: teacherUsername,
                pass: teacherPassword,
                dept: teacherDept
            
            }
        })
            .done(function (data) {
                let result = JSON.parse(data);

                if (result.res == "success") {
                    // alert("done saving data");

                    $('#teacherTable').DataTable().clear().destroy();
                    setTeacherTable();

                    var a = document.getElementsByClassName("newTeacher");

                    for (var i = 0; i < a.length; i++) {

                        a[i].value = "";
                    }



                    $("#newTeacherForm").modal('hide')
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Duplicate teacher or username detected',

                    })
                }
            });
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill in the missing details!!',

        })
    }
});




$('#teacherTable').on('click', 'td.edit', function (e) {

    var currentRow = $(this).closest("tr");

    var col1 = currentRow.find("td:eq(0)").text(); // get current row 1st TD value
    var col2 = currentRow.find("td:eq(1)").text(); // get current row 2nd TD
    var col3 = currentRow.find("td:eq(2)").text(); // get current row 3rd TD
    var col4 = currentRow.find("td:eq(3)").text(); // get current row 4th TD
    var col5 = currentRow.find("td:eq(4)").text(); // get current row 5th TD
    var col6 = currentRow.find("td:eq(5)").text(); // get current row 6th TD
    var col7 = currentRow.find("td:eq(6)").text(); // get current row 7th TD



    // var data = col1 + "\n" + col2 + "\n" + col3;
    populateDeptDropdown("UpdateTeacher", col7);

    $("#updateTeacherForm").modal('show')

    document.querySelector("#tID").value = col1;
    document.querySelector("#newtfn").value = col2;
    document.querySelector("#newtln").value = col3;
    document.querySelector("#newtmn").value = col4;
    document.querySelector("#newtun").value = col5;
    document.querySelector("#newtps").value = col6;
    document.querySelector("#newtdept").value = col7;


    //alert(data);
});





//Adding new dept on button click

$("#updateTeacherBtn").click(function () {

    var tid = document.getElementById("tID").value;
    var teacherFn = document.getElementById("newtfn").value;
    var teacherLn = document.getElementById("newtln").value;
    var teacherMn = document.getElementById("newtmn").value;
    var teacherUsername = document.getElementById("newtun").value;
    var teacherPassword = document.getElementById("newtps").value;
    var teacherDept = document.getElementById("newtdept").value;



    if (teacherFn != "" && teacherLn != "" && teacherMn != "" && teacherUsername != "" && teacherPassword !="" && teacherDept != "") {

        $.ajax({
            url: "./sql_functions/update.teacher.php",
            type: "GET",
            data: {
                id: tid,
                fn: teacherFn,
                ln: teacherLn,
                mn: teacherMn,
                user: teacherUsername,
                pass: teacherPassword,
                dept: teacherDept
            
            }
        })
            .done(function (data) {
                let result = JSON.parse(data);

                if (result.res == "success") {
                    // alert("done saving data");

                    $('#teacherTable').DataTable().clear().destroy();
                    setTeacherTable();

                    var a = document.getElementsByClassName("newTeacher");

                    for (var i = 0; i < a.length; i++) {

                        a[i].value = "";
                    }



                    $("#updateTeacherForm").modal('hide')
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Duplicate teacher or username detected',

                    })
                }
            });
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill in the missing details!!',

        })
    }
});


