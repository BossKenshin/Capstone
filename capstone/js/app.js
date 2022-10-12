

var table;

var deptData;
var courseData;
var teachersData;

var tableRe;

setDeptTable();
setCourseTable();
setTeacherTable();




//seting department table
function setDeptTable() {

    $(document).ready(function () {
        var arr;

        $.ajax({
            url: "./sql_functions/fetch.department.php",
            success: function (data) {

                deptData = JSON.parse(data);

                table = $('#deptTable').DataTable({
                    data: deptData,
                    columns: [
                        { data: 'dept_id', },
                        { data: 'dept_name' },
                        { data: 'dept_abbreviation' },
                        { data: 'dept_username' },
                        { data: 'dept_password' },
                        {
                            data: 'null',
                            defaultContent: '0',
                        },
                        {
                            data: 'null',
                            defaultContent: '0',
                        },
                        {
                            data: 'null',
                            defaultContent: '0',
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


$('#deptTable').on('click', 'td.edit', function (e) {

    var currentRow = $(this).closest("tr");

    var col1 = currentRow.find("td:eq(0)").text(); // get current row 1st TD value
    var col2 = currentRow.find("td:eq(1)").text(); // get current row 2nd TD
    var col3 = currentRow.find("td:eq(2)").text(); // get current row 3rd TD
    var col4 = currentRow.find("td:eq(3)").text(); // get current row 4th TD
    var col5 = currentRow.find("td:eq(4)").text(); // get current row 5th TD


    var data = col1 + "\n" + col2 + "\n" + col3;
    $("#updatedeptform").modal('show')

    document.querySelector("#deptID").value = col1;
    document.querySelector("#newdeptname").value = col2;
    document.querySelector("#newdeptabb").value = col3;
    document.querySelector("#newdeptusername").value = col4;
    document.querySelector("#newdeptpassword").value = col5;

    //alert(data);
});


$('#deptTable').on('click', 'td.delete', function (e) {



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
            var col2 = currentRow.find("td:eq(1)").text(); // get current row 2nd TD value
            var data = col1;

            $.ajax({
                url: "./sql_functions/delete.department.php",
                type: "GET",
                data: {
                    id: col1,
                }
            })
                .done(function (data) {
                    let result = JSON.parse(data);

                    if (result.res == "success") {
                        // alert("done saving data");

                        $('#deptTable').DataTable().clear().destroy();
                        setDeptTable();
                    } else {
                        alert("Error, Something happened");
                    }
                });


            swalWithBootstrapButtons.fire(
                'Deleted!',
                col2 + ' has been deleted.',
                'success'
            )
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelled',
                'error'
            )
        }
    })


    //alert(data);
});




//Adding new dept on button click

$("#addNewDept").click(function () {

    var newDeptName = document.getElementById("deptname").value;
    var newDeptAbb = document.getElementById("deptabb").value;
    var newDeptUser = document.getElementById("deptusername").value;
    var newDeptPass = document.getElementById("deptpassword").value;


    if (newDeptName != "" && newDeptAbb != "" && newDeptUser != "" && newDeptPass != "") {

        $.ajax({
            url: "./sql_functions/add.department.php",
            type: "GET",
            data: {
                name: newDeptName,
                abb: newDeptAbb,
                user: newDeptUser,
                pass: newDeptPass
            }
        })
            .done(function (data) {
                let result = JSON.parse(data);

                if (result.res == "success") {
                    // alert("done saving data");

                    $('#deptTable').DataTable().clear().destroy();
                    setDeptTable();

                    var a = document.getElementsByClassName("newdept");

                    for (var i = 0; i < a.length; i++) {

                        a[i].value = "";
                    }



                    $("#newdeptform").modal('hide')
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Duplicate department or username detected',

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


////click function to update department


$("#updateDeptBtn").click(function () {

    var deptid = document.getElementById("deptID").value;
    var newDeptName = document.getElementById("newdeptname").value;
    var newDeptAbb = document.getElementById("newdeptabb").value;
    var newDeptUser = document.getElementById("newdeptusername").value;
    var newDeptPass = document.getElementById("newdeptpassword").value;

    if (newDeptName != "" && newDeptAbb != "" && newDeptUser != "" && newDeptPass != "") {


        $.ajax({
            url: "./sql_functions/update.department.php",
            type: "GET",
            data: {
                id: deptid,
                name: newDeptName,
                abb: newDeptAbb,
                user: newDeptUser,
                pass: newDeptPass
            }
        })
            .done(function (data) {
                let result = JSON.parse(data);

                if (result.res == "success") {
                    // alert("done saving data");

                    $('#deptTable').DataTable().clear().destroy();
                    setDeptTable();

                    $("#updatedeptform").modal('hide')
                    document.querySelectorAll("#updatedeptform input").val('');

                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Duplicate department or username detected',

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




$("#btn-refresh").click(function () {

    $('#deptTable').DataTable().clear().destroy();
    setDeptTable();

    $("#newdeptform").modal('hide')
    document.querySelectorAll("#newdeptform input").empty;

});


////////////////////////////////////////////////////////////// THIS IS FOR MANAGE COURSES  /////////////////////////////////////////////////////


//seting department table
function setCourseTable() {

    $(document).ready(function () {

        $.ajax({
            url: "./sql_functions/fetch.course.php",
            success: function (data) {
                courseData = JSON.parse(data);
                table = $('#courseTable').DataTable({
                    data: courseData,
                    columns: [
                        { data: 'course_id', },
                        { data: 'course_name' },
                        { data: 'course_abbreviation' },
                        {
                            data: 'dept',
                            defaultContent: 'none',
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



$('#courseTable').on('click', 'td.edit', function (e) {

    var currentRow = $(this).closest("tr");

    var col1 = currentRow.find("td:eq(0)").text(); // get current row 1st TD value
    var col2 = currentRow.find("td:eq(1)").text(); // get current row 2nd TD
    var col3 = currentRow.find("td:eq(2)").text(); // get current row 3rd TD
    var col4 = currentRow.find("td:eq(3)").text(); // get current row 4th TD
    var col_dept_id = currentRow.find("td:eq(4)").text(); // get current row 5th TD


    // var data = col1 + "\n" + col2 + "\n" + col3;
    populateCourseDept("UpdateCourse", col4);

    $("#updateCourseForm").modal('show')

    document.querySelector("#coID").value = col1;
    document.querySelector("#newCourseName").value = col2;
    document.querySelector("#newCourseAbb").value = col3;
    document.querySelector("#newDept").value = col4;

    //alert(data);
});


function populateCourseDept(text, oldDept) {
    $(document).ready(function () {
        $.ajax({
            url: "./sql_functions/fetch.department.php",
            success: function (data) {
                var result = JSON.parse(data);
                // alert("done saving data");


                if (text == "UpdateCourse") {
                    var element = document.getElementById("newDept");

                    $("#newDept").empty();

                    for (var i = 0; i < result.length; i++) {
                        let op = document.createElement("option");

                        if (result[i].dept_name != "Unassigned") {
                            op.value = result[i].dept_id;
                            op.textContent = result[i].dept_name;
                            if (oldDept == result[i].dept_name) {
                                op.setAttribute("selected", "selected");
                            }

                            element.append(op);
                        }
                    }


                }
                else {
                    var element = document.getElementById("DeptSelect");

                    $("#DeptSelect").empty();

                    for (var i = 0; i < result.length; i++) {
                        let op = document.createElement("option");
                        if (result[i].dept_name != "Unassigned") {

                        op.value = result[i].dept_id;
                        op.textContent = result[i].dept_name;
                        element.append(op);
                        }
                    }
                }

            }
        })
    });
}

$("#updateCourseBtn").click(function () {

    var cid = document.getElementById("coID").value;
    var cNAme = document.getElementById("newCourseName").value;
    var cAbb = document.getElementById("newCourseAbb").value;
    var cDept = document.getElementById("newDept").value;

    if (cid != "" && cNAme != "" && cAbb != "" && cDept != "") {


        $.ajax({
            url: "./sql_functions/update.course.php",
            type: "GET",
            data: {
                id: cid,
                name: cNAme,
                abb: cAbb,
                dept: cDept
            }
        })
            .done(function (data) {
                let result = JSON.parse(data);

                if (result.res == "success") {

                    $('#courseTable').DataTable().clear().destroy();
                    setCourseTable();

                    $("#updateCourseForm").modal('hide')
                    document.querySelectorAll("#updateCourseForm input").val('');

                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Duplicate course or course abbreviation detected',

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




$('#courseTable').on('click', 'td.delete', function (e) {
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
            var col2 = currentRow.find("td:eq(1)").text(); // get current row 2nd TD value
            var data = col1;

            $.ajax({
                url: "./sql_functions/delete.course.php",
                type: "GET",
                data: {
                    id: col1,
                }
            })
                .done(function (data) {
                    let result = JSON.parse(data);

                    if (result.res == "success") {
                        // alert("done saving data");

                        $('#courseTable').DataTable().clear().destroy();
                        setCourseTable();
                    } else {
                        alert("Error, Something happened");
                    }
                });


            swalWithBootstrapButtons.fire(
                'Deleted!',
                col2 + ' has been deleted.',
                'success'
            )
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelled',
                'error'
            )
        }
    })


    //alert(data);
});


$("#addNewCourse").click(function () {

    var cName = document.getElementById("courseName").value;
    var cAbb = document.getElementById("courseAbb").value;
    var cDept = document.getElementById("DeptSelect").value;



    if (cName != "" && cAbb != "" && cDept != "") {

        $.ajax({
            url: "./sql_functions/add.course.php",
            type: "GET",
            data: {
                name: cName,
                abb: cAbb,
                dept: cDept
            }
        })
            .done(function (data) {
                let result = JSON.parse(data);

                if (result.res == "success") {
                    // alert("done saving data");

                    $('#courseTable').DataTable().clear().destroy();
                    setCourseTable();

                    var a = document.getElementsByClassName("newdept");

                    for (var i = 0; i < a.length; i++) {

                        a[i].value = "";
                    }



                    $("#newCourseForm").modal('hide')
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Duplicate Course or Course abbreviation',

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


$("#btn-refresh-course").click(function () {

    $('#courseTable').DataTable().clear().destroy();
    setCourseTable();

    $("#newCourseForm").modal('hide')
    document.querySelectorAll("#newCourseForm input").empty;

});


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


