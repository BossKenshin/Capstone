setCourseTable();

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

                        if (result[i].dept_name != "Unassigned" && result[i].dept_name != "Resigned") {
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
                        if (result[i].dept_name != "Unassigned" && result[i].dept_name != "Resigned") {

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
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
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

