
setDeptTable();


//seting department table
function setDeptTable() {

    $(document).ready(function () {

        $.ajax({
            url: "./sql_functions/fetch.department.php",
            success: function (data) {

             var deptData = JSON.parse(data);

             console.log(deptData);

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


    $("#updatedeptform").modal('show')

    document.querySelector("#deptID").value = col1;
    document.querySelector("#newdeptname").value = col2;
    document.querySelector("#newdeptabb").value = col3;
    document.querySelector("#newdeptusername").value = col4;
    document.querySelector("#newdeptpassword").value = col5;

    //alert(data);
});


$('#deptTable').on('click', 'td.delete', function (e) {



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