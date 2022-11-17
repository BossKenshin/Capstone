const params = new URLSearchParams(window.location.search);
var student_sid = params.get("sid");
var _id = params.get("id");
var fn = params.get("studentname");
var studentCourse = params.get("course");
var studentYear = params.get("year");


var student_name = document.getElementById("sid");

student_name.innerHTML = "Student Name: " + fn;
document.getElementById("_courseYear").innerHTML =
  "Course & Year: " + studentCourse +" "+ studentYear;


loadSubjects();

function loadSubjects() {
  console.log("Clicked");

  var year = document.getElementById("yearDropdown").value;
  var sem = document.getElementById("semDropdown").value;

  $(document).ready(function () {
    $.ajax({
      url: "./sql_functions/fetch.subject.student.php",
      data: {
        year: year,
        sem: sem,
        course: studentCourse
      },
      success: function (data) {
        var json = JSON.parse(data);
        // get template
        const template = document.querySelector("#template");

        //get the parent element
        const parent = document.querySelector("tbody");

        $("tbody").empty();

        for (let i = 0; i < json.length; i++) {
          //clone the template
          let clone = template.content.cloneNode(true);

          clone.querySelector("#subCode").innerHTML = json[i].subject_code;
          clone.querySelector("#subject").innerHTML = json[i].subject_name;
          clone.querySelector("#Grade").innerHTML = " ";

          //apppend
          parent.append(clone);
        }
        getGrades(_id, year, sem);
      },
    });
  });
}




function getGrades(id, year, sem) {

    console.log(id + "  " + year + " " + sem + " " + studentCourse);

  $.ajax({
    url: "./sql_functions/fetch.grades.php",
    data: {
      id: id,
      year: year,
      sem: sem,
      course: studentCourse
    },
    success: function (data) {
      var g = JSON.parse(data);

      console.log(g);

      var _row = document.querySelectorAll("tbody tr");
      var val = [];
      // alert(_row.length);

      for (let i = 0; i < _row.length; i++) {
        val.push(
          $("#gradesTable")
            .find("tbody tr:eq(" + i + ")")
            .find("td:eq(0)")
            .text()
        );
      }

      for (let j = 0; j < val.length; j++) {
        for (let k = 0; k < g.length; k++) {
          if (val[j] == g[k].subject_code) {
            $("#gradesTable")
              .find("tbody tr:eq(" + j + ")")
              .find("td:eq(2)")
              .text(g[k].grade);
          }
        }
      }

      // for(let j = 0; j < val.length; j++) {

      //     if(val[j] == "Purposive Communication"){
      //         $("#subjectTable").find('tbody tr:eq('+ j +')').find('td:eq(4)').text("new value")
      //     }

      // }
    },
  });
}
