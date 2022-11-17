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
                        { data: 'subject_code' },
                        { data: 'subject_name' },
                        { data: 'dept_abb'},
                        { data: 'course' },
                        { data: 'year_level'},
                        { data: 'semester' },
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

    var col1 = currentRow.find("td:eq(0)").text(); // get current row 1st TD 
    var col2 = currentRow.find("td:eq(1)").text(); // get current row 2nd TD
    var col3 = currentRow.find("td:eq(2)").text(); // get current row 3rd TD
    var col4 = currentRow.find("td:eq(3)").text(); // get current row 4th TD 
    var col5 = currentRow.find("td:eq(4)").text(); // get current row 5th TD
    var col6 = currentRow.find("td:eq(5)").text(); // get current row 6th TD
    var col7 = currentRow.find("td:eq(6)").text(); // get current row 7th TD

 



    populateDeptDropdown(col5, col4);
    // var data = col1 + "\n" + col2 + "\n" + col3;
    $("#updateSubjectForm").modal('show');

    document.querySelector("#sid").value = col1;
    document.querySelector("#updateSubjectCode").value = col2;
    document.querySelector("#updateSubjectName").value = col3;




    $("#chooseUpdateYear").val(col6).change();
    $("#chooseUpdateSem").val(col7).change();


    //alert(data);
});



function populateDeptDropdown(course, oldDept) {
  $(document).ready(function () {
    $.ajax({
      url: "./sql_functions/fetch.department.php",
      success: function (data) {
        var result = JSON.parse(data);
        // alert("done saving data");

        var deID;
        var element = document.getElementById("chooseUpdateDept");

        $("#chooseUpdateDept").empty();

        for (var i = 0; i < result.length; i++) {
          let op = document.createElement("option");

          if (
            result[i].dept_name != "Unassigned" &&
            result[i].dept_name != "Resigned"
          ) {
            op.value = result[i].dept_id;
            op.textContent = result[i].dept_abbreviation;

            if (oldDept == result[i].dept_abbreviation) {
              deID = result[i].dept_id;
              op.setAttribute("selected", "selected");
            }

            element.append(op);
          }
        }

        populateCourseDropdown(course, deID);
      },
    });
  });
}

function populateCourseDropdown(course, id) {
  $(document).ready(function () {
    $.ajax({
      url: "./sql_functions/fetch.course.php",
      success: function (data) {
        var result = JSON.parse(data);
        // alert("done saving data");

        var element = document.getElementById("chooseUpdateCourse");

        $("#chooseUpdateCourse").empty();

        for (var i = 0; i < result.length; i++) {
          let op = document.createElement("option");

          if (result[i].dept_id == id) {
            op.value = result[i].course_id;
            op.textContent = result[i].course_abbreviation;
            if (course == result[i].course_abbreviation) {
              op.setAttribute("selected", "selected");
            }

            element.append(op);
          }
        }
      },
    });
  });
}





$('#subjectTable').on('click', 'td.delete', function (e) {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })



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
            var col2 = currentRow.find("td:eq(1)").text(); // get current row 2nd TD
            var col3 = currentRow.find("td:eq(2)").text(); // get current row 3rd TD

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
    var subject_code = document.getElementById("subjectcode");
    var course = document.getElementById("chooseCourse").value;
    var year = document.getElementById("chooseYear").value;
    var sem = document.getElementById("chooseSem").value;


    var code = subject_code.value;
    var subName = ele_input.value;

    if(subName != ""){

            $.ajax({
                url : "./sql_functions/add.subject.php",
                type: "GET",
                data:
                    {
                        subject: subName,
                        code: code,
                        course: course,
                        year: year,
                        sem: sem,
                    }   


            })

            .done(function (data){

                let result = JSON.parse(data);

                if(result.res == "success"){

                    $('#subjectTable').DataTable().clear().destroy();
                    setSubjectTable();

                    ele_input.value = "";
                    subject_code.value = "";

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

var subject_code = document.getElementById("updateSubjectCode").value;

var sid = document.getElementById("sid").value;

var course = document.getElementById("chooseUpdateCourse").value;
var year = document.getElementById("chooseUpdateYear").value;
var sem = document.getElementById("chooseUpdateSem").value;

if(val_subname != ""){

    $.ajax({
        url: "./sql_functions/update.subject.php",
        type: "GET",
        data: 
            { 
                id : sid,
                name: val_subname,
                code: subject_code,
                course: course,
                year: year,
                sem: sem,
                
            }
    })

    .done(function (data){

        let result = JSON.parse(data);

        if (result.res == "success") {
            $('#subjectTable').DataTable().clear().destroy();
            setSubjectTable();

            ele_input.value = "";
            subject_code = "";

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


                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                }
              })


    //alert(data);
});



$("#modalExcelImportBtn").click(function () {

  $("#chooseCourseImport").empty();

  _deptDropdownImport();
});




function _deptDropdownImport() {
    $(document).ready(function () {
      $.ajax({
        url: "./sql_functions/fetch.department.php",
        success: function (data) {
          var result = JSON.parse(data);
          // alert("done saving data");
          var element = document.getElementById("chooseDeptImport");
  
          $("#chooseDeptImport").empty();
  
          let ops = document.createElement("option");
          ops.value = "0";
          ops.hidden = true;
          ops.innerHTML = "Select Department";
          element.appendChild(ops);
  
          for (var i = 0; i < result.length; i++) {
            let op = document.createElement("option");
  
            if (
              result[i].dept_name != "Unassigned" &&
              result[i].dept_name != "Resigned"
            ) {
              op.value = result[i].dept_id;
              op.textContent = result[i].dept_name;
  
              element.append(op);
            }
          }
        },
      });
    });
  }
  


$("#chooseDeptImport")
.change(function () {
  $("#chooseDeptImport option:selected").each(function () {
    // state here what happens if the selected option is selected
    var dept_id = $(this).val();
    var dept_name = $(this).text();

    //var elementDropdown = document.getElementById("chooseDept");

    _courseDropdownImport(dept_name);
  });
})
.change();


function _courseDropdownImport(department) {
$(document).ready(function () {
  $.ajax({
    url: "./sql_functions/fetch.course.php",
    success: function (data) {
      var result = JSON.parse(data);
      // alert("done saving data");

      var element = document.getElementById("chooseCourseImport");

      $("#chooseCourseImport").empty();

      let ops = document.createElement("option");
      ops.value = "0";
      ops.innerHTML = "Choose Course";
      element.appendChild(ops);

      for (var i = 0; i < result.length; i++) {
        let op = document.createElement("option");

        if (result[i].dept == department) {
          op.value = result[i].course_id;
          op.textContent = result[i].course_abbreviation;

          element.append(op);
        }
      }
    },
  });
});
}

/////////////////////////////-----------------------------------/////////////////


let selectedFile;
var DBstudentObject;
var rowSubjectList;

document.getElementById("fileExcel").addEventListener("change", (event) => {
  selectedFile = event.target.files[0];
});

document.getElementById("addSubject").addEventListener("click", () => {
  //  let rowObject;
  var dept = $("#chooseDeptImport").val();
  var course = $("#chooseCourseImport").val();

  if (selectedFile && dept != "" && dept != 0 && course != 0 && course != "") {
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(selectedFile);
    fileReader.onload = (event) => {
      let data = event.target.result;
      let workbook = XLSX.read(data, { type: "binary" });
      workbook.SheetNames.forEach((sheet) => {
        rowSubjectList = XLSX.utils.sheet_to_row_object_array(
          workbook.Sheets[sheet]
        );
      });

      var regExp = /[a-zA-Z]/;
      var len = rowSubjectList.length;
      var _hasrun = false;

      console.log(rowSubjectList);

      for (var i = 0; i < rowSubjectList.length; i++) {
        if (rowSubjectList[i].hasOwnProperty("Code") && rowSubjectList[i].hasOwnProperty("Subject")) {
            $.ajax({
              url: "./sql_functions/add.subject.php",
              type: "GET",
              data: {
                code:    rowSubjectList[i].Code,
                subject: rowSubjectList[i].Subject,
                year:    rowSubjectList[i].Year,
                sem      :rowSubjectList[i].Semester,
                course:  course
              }
            }).done(function() {

                if(i = len){
                   
                    if(_hasrun === false){
                        $("#subjectTable").DataTable().clear().destroy();
                        setSubjectTable();
                         _hasrun = true;
                    }
                }
              });

        } else {
          Swal.fire({
            icon: "Error",
            title: "Oops...",
            text: "You have selected a wrong file",
          });
        }
      }
      document.querySelector("#fileExcel").value = "";

      $("#chooseDeptImport").empty();
      $("#chooseCourseImport").empty();


      $("#modalForSubjectExcel").modal("hide");

     
    };
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill out the missing details!!",
    });
  }
});

/////////////////////////////-----------------------------------/////////////////


document.getElementById("fileExcel").addEventListener("change", (event) => {
    selectedFile = event.target.files[0];
  });
  
  document.getElementById("updateMultiSubject").addEventListener("click", () => {
    //  let rowObject;
    var dept = $("#chooseDeptImport").val();
    var course = $("#chooseCourseImport").val();
  
    if (selectedFile && dept != "" && dept != 0 && course != 0 && course != "") {
      let fileReader = new FileReader();
      fileReader.readAsBinaryString(selectedFile);
      fileReader.onload = (event) => {
        let data = event.target.result;
        let workbook = XLSX.read(data, { type: "binary" });
        workbook.SheetNames.forEach((sheet) => {
          rowSubjectList = XLSX.utils.sheet_to_row_object_array(
            workbook.Sheets[sheet]
          );
        });
  
        var regExp = /[a-zA-Z]/;
        var len = rowSubjectList.length;
        var _hasrun = false;
  
        console.log(rowSubjectList);
  
        for (var i = 0; i < rowSubjectList.length; i++) {
          if (rowSubjectList[i].hasOwnProperty("Code") && rowSubjectList[i].hasOwnProperty("Subject")) {
              $.ajax({
                url: "./sql_functions/update.multi.subject.php",
                type: "GET",
                data: {
                  code:    rowSubjectList[i].Code,
                  subject: rowSubjectList[i].Subject,
                  year:    rowSubjectList[i].Year,
                  sem      :rowSubjectList[i].Semester,
                  course:  course
                }
              }).done(function() {
  
                  if(i = len){
                     
                      if(_hasrun === false){
                          $("#subjectTable").DataTable().clear().destroy();
                          setSubjectTable();
                           _hasrun = true;
                      }
                  }
                });
  
          } else {
            Swal.fire({
              icon: "Error",
              title: "Oops...",
              text: "You have selected a wrong file",
            });
          }
        }
        document.querySelector("#fileExcel").value = "";
  
        $("#chooseDeptImport").empty();
        $("#chooseCourseImport").empty();
  
  
        $("#modalForSubjectExcel").modal("hide");
  
       
      };
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill out the missing details!!",
      });
    }
  });


  
$("#btn-new-subject").click(function () {

  $("#chooseCourse").empty();

  _deptDropdown();
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
        ops.value = "0";
        ops.hidden = true;
        ops.innerHTML = "Select Department";
        element.appendChild(ops);

        for (var i = 0; i < result.length; i++) {
          let op = document.createElement("option");

          if (
            result[i].dept_name != "Unassigned" &&
            result[i].dept_name != "Resigned"
          ) {
            op.value = result[i].dept_id;
            op.textContent = result[i].dept_name;

            element.append(op);
          }
        }
      },
    });
  });
}



$("#chooseDept")
.change(function () {
$("#chooseDept option:selected").each(function () {
  // state here what happens if the selected option is selected
  var dept_id = $(this).val();
  var dept_name = $(this).text();

  //var elementDropdown = document.getElementById("chooseDept");

  _courseDropdown(dept_name);
});
})
.change();


function _courseDropdown(department) {
$(document).ready(function () {
$.ajax({
  url: "./sql_functions/fetch.course.php",
  success: function (data) {
    var result = JSON.parse(data);
    // alert("done saving data");

    var element = document.getElementById("chooseCourse");

    $("#chooseCourse").empty();

    let ops = document.createElement("option");
    ops.value = "0";
    ops.innerHTML = "Choose Course";
    element.appendChild(ops);

    for (var i = 0; i < result.length; i++) {
      let op = document.createElement("option");

      if (result[i].dept == department) {
        op.value = result[i].course_id;
        op.textContent = result[i].course_abbreviation;

        element.append(op);
      }
    }
  },
});
});
}








$("#chooseUpdateDept")
.change(function () {
$("#chooseUpdateDept option:selected").each(function () {
  // state here what happens if the selected option is selected
  var dept_id = $(this).val();
  var dept_name = $(this).text();

  //var elementDropdown = document.getElementById("chooseDept");

  _updatecourseDropdown(dept_name);
});
})
.change();

