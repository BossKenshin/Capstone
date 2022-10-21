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