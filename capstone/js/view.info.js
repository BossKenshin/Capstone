const params = new URLSearchParams(window.location.search);
var student_sid = params.get('sid');
var fn = params.get('studentname');

var student_name = document.getElementById("sid");

student_name.innerHTML = "Student Name: " + fn;

_schoolyearDropdown();


function setGradesTable() {

    $(document).ready(function () {

        var sy = document.getElementById("_schoolyear").value;
        var sem = document.getElementById("_semester").value;


        $.ajax({
            url: "./sql_functions/fetch.grades.php",
            data: {
                stuid: student_sid,
                sy: sy,
                sem: sem
            },
            success: function (data) {

                 var gradesData = JSON.parse(data);


                //  console.log(deptData);

                 $('#gradesTable').DataTable({
                    data: gradesData,
                    columns: [
                        { data: 'subject_code', },
                        { data: 'subject_name' },
                        { data: 'grade' }
                    ]
                });

            }
        })


    });
}



function _schoolyearDropdown() {
    $(document).ready(function () {
        $.ajax({
            url: "./sql_functions/fetch.school_year.php",
            data: {
                stuid : student_sid
            },
            success: function (data) {
                var result = JSON.parse(data);
   // alert("done saving data");
                    var element = document.getElementById("_schoolyear");

                    $("#_schoolyear").empty();

                    for (var i = 0; i < result.length; i++) {
                        let op = document.createElement("option");

                            op.value = result[i].school_year;
                            op.textContent = result[i].school_year;

                            element.append(op);
                        
                    }

                    setGradesTable();

            }
        })
    });
}

$("#_filtergrades").click(function(){

    $('#gradesTable').DataTable().clear().destroy();
    setGradesTable();

});