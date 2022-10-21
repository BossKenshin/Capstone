setSubjectTable();

function setSubjectTable() {

    $(document).ready(function () {

        $.ajax({
            url: "./sql_functions/fetch.subject.php",
            success: function (data) {
                subjectData = JSON.parse(data);
                $('#subjectTable').DataTable({
                    data: subjectData,
                    columns: [
                        { data: 'subject_id', },
                        { data: 'subject_name' },
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





$('#subjectTable').on('click', 'td.edit', function (e) {

    var currentRow = $(this).closest("tr");

    var col1 = currentRow.find("td:eq(0)").text(); // get current row 1st TD value
    var col2 = currentRow.find("td:eq(1)").text(); // get current row 2nd TD



    // var data = col1 + "\n" + col2 + "\n" + col3;

    $("#updateSubjectForm").modal('show')

    document.querySelector("#sid").value = col1;
    document.querySelector("#updateSubjectName").value = col2;

    //alert(data);
});




$('#subjectTable').on('click', 'td.delete', function (e) {
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

            $.ajax({
                url: "./sql_functions/delete.subject.php",
                type: "GET",
                data: {
                    id: col1,
                }
            })
                .done(function (data) {
                    let result = JSON.parse(data);

                    if (result.res == "success") {
                        // alert("done saving data");

                        $('#subjectTable').DataTable().clear().destroy();
                        setSubjectTable();
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


$("#addNewSubject").click(function () {
    var ele_input =  document.getElementById("subjectname");

    var subName = ele_input.value;

    if(subName != ""){

            $.ajax({
                url : "./sql_functions/add.subject.php",
                type: "GET",
                data:
                    {
                        name: subName
                    }   


            })

            .done(function (data){

                let result = JSON.parse(data);

                if(result.res == "success"){

                    $('#subjectTable').DataTable().clear().destroy();
                    setSubjectTable();

                    ele_input.value = "";

                    $("#newSubjectForm").modal("hide");
                }
                else{
                        Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Duplicate subject detected',

                    })
                }


            });

    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill in the details',

        })
    }

});



$("#updateSubject").click(function(){

var ele_input = document.getElementById("updateSubjectName");
var val_subname = ele_input.value;

var sid = document.getElementById("sid").value;

if(val_subname != ""){

    $.ajax({
        url: "./sql_functions/update.subject.php",
        type: "GET",
        data: 
            { 
                id : sid,
                name: val_subname
            }



    })

    .done(function (data){

        let result = JSON.parse(data);

        if (result.res == "success") {
            $('#subjectTable').DataTable().clear().destroy();
            setSubjectTable();

            ele_input.value = "";

            $("#updateSubjectForm").modal("hide");
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Duplicate subject detected',

            })
        }
    })
}
else{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in the details',

    })
}


})




$('#subjectTable').on('click', 'td.delete', function (e) {
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
                url: "./sql_functions/delete.subject.php",
                type: "GET",
                data: {
                    id: col1,
                }
            })
                .done(function (data) {
                    let result = JSON.parse(data);

                    if (result.res == "success") {
                        // alert("done saving data");

                        $('#subjectTable').DataTable().clear().destroy();
                        setSubjectTable();
                    } else {
                        alert("Error, Something happened");
                    }
                });


            swalWithBootstrapButtons.fire(
                'Deleted!',
                'success'
            )
        }
    })


    //alert(data);
});