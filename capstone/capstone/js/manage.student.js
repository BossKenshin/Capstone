
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