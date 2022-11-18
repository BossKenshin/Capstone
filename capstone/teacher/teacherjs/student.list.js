let timerInterval
Swal.fire({
  title: 'Getting Ready',
  html: '<b></b>, Please wait...',
  timer: 2000,
  timerProgressBar: true,
  allowOutsideClick: false,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
  },
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
      $('#studentList').DataTable().clear().destroy();

    setStudentList();
  }
})



function setStudentList() {

    $(document).ready(function () {

        var year = document.getElementById("StudentYear").value;
        var course = document.getElementById("StudentCourse").innerHTML;
        var section = document.getElementById("StudentSection").value;

        console.log(section + " " + year + " " + course);


        $.ajax({
            url: "./sql/fetch.student.list.php",
            data: 
            {
                year: year,
                course: course,
                section: section
            },
            success: function (data) {
                var studentData = JSON.parse(data);

                if(studentData.length != 0){

                    document.getElementById("studentList").style.visibility = 'unset';


                $('#studentList').DataTable({
                    data: studentData,
                    columns: [
                        { data: 'school_id', },
                        { data: 'fullname' }
            
                    ]
                });

            }
            else{

                Swal.fire(
                    'Unfortunately',
                    'There is no student list to display',
                    'info'
                  )

                document.getElementById("studentList").style.visibility = 'hidden';
            }

            }
        })


    });
}


$("#filterStudents").click(function(){

    $('#studentList').DataTable().clear().destroy();

    setStudentList();



})


function setSection(year) {

    $(document).ready(function () {

        var course = document.getElementById("StudentCourse").innerHTML;



        $.ajax({
            url: "./sql/count.section.php",
            data: 
            {
                year: year,
                course: course
            },
            success: function (data) {
                var result = JSON.parse(data);

                
           
                var element = document.getElementById("StudentSection");

                $("#StudentSection").empty();

                for (var i = 0; i < result.length; i++) {
                    let op = document.createElement("option");

    

                    op.value = result[i].section;
                    op.textContent = result[i].section;
                    element.append(op);
                    
                }




            }
        })


    });
}



$("#StudentYear")
.change(function () {
$("#StudentYear option:selected").each(function () {
  // state here what happens if the selected option is selected
  var year = $(this).text();

  //var elementDropdown = document.getElementById("chooseDept");

  setSection(year);

  //setStudentList();
});
})
.change();