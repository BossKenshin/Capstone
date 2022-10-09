

var table;
var deptData;
var tableRe;

setDeptTable();



function gotclicked(deptID, deptName, deptAbb, deptUser, deptPass){
 
//alert(deptID + deptName + deptAbb + deptUser + deptPass);

document.getElementById("deptID").value = deptID;
document.getElementById("newdeptname").value = deptName;
document.getElementById("newdeptabb").value = deptAbb;
document.getElementById("newdeptusername").value = deptUser;
document.getElementById("newdeptpassword").value = deptPass;

}



function setDeptTable(){

$(document).ready(function () {
    var arr;

    $.ajax({
        url: "./sql_functions/fetch.department.php",
        success: function(data) {

            deptData = JSON.parse(data);

            table = $('#deptTable').DataTable({
                data: deptData,
                columns: [
                    { data: 'dept_id',},
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

    var currentRow=$(this).closest("tr"); 
         
    var col1=currentRow.find("td:eq(0)").text(); // get current row 1st TD value
    var col2=currentRow.find("td:eq(1)").text(); // get current row 2nd TD
    var col3=currentRow.find("td:eq(2)").text(); // get current row 3rd TD
    var col4=currentRow.find("td:eq(3)").text(); // get current row 4th TD
    var col5=currentRow.find("td:eq(4)").text(); // get current row 5th TD


    var data=col1+"\n"+col2+"\n"+col3;
    $("#updatedeptform").modal('show')

    document.querySelector("#deptID").value = col1;
    document.querySelector("#newdeptname").value = col2;
    document.querySelector("#newdeptabb").value = col3;
    document.querySelector("#newdeptusername").value = col4;
    document.querySelector("#newdeptpassword").value = col5;

    //alert(data);
} );


$('#deptTable').on('click', 'td.delete', function (e) {

    var currentRow=$(this).closest("tr"); 
         
    var col1=currentRow.find("td:eq(0)").text(); // get current row 1st TD value
    var data=col1;
   //alert(data);
} );


//Adding new dept on button click

$("#addNewDept").click(function(){

    var newDeptName = document.getElementById("deptname").value;
    var newDeptAbb = document.getElementById("deptabb").value;
    var newDeptUser = document.getElementById("deptusername").value;
    var newDeptPass = document.getElementById("deptpassword").value;

    $.ajax({
        url  : "./sql_functions/add.department.php",
        type : "GET",
        data :  {
            name : newDeptName,
            abb  : newDeptAbb,
            user : newDeptUser,
            pass : newDeptPass
        }
    })
    .done(function(data){
        let result = JSON.parse(data);

        if(result.res == "success"){
            // alert("done saving data");

            $('#deptTable').DataTable().clear().destroy();
            setDeptTable();

            $("#newdeptform").modal('hide')
            document.querySelectorAll("#newdeptform input").empty;    
        
        }else{
            alert("Error, Something happened");
        }
    });
});


////click function to update department


$("#updateDeptBtn").click(function(){

    var deptid = document.getElementById("deptID").value;
    var newDeptName = document.getElementById("newdeptname").value;
    var newDeptAbb = document.getElementById("newdeptabb").value;
    var newDeptUser = document.getElementById("newdeptusername").value;
    var newDeptPass = document.getElementById("newdeptpassword").value;

    $.ajax({
        url  : "./sql_functions/update.department.php",
        type : "GET",
        data :  {
            id   : deptid,
            name : newDeptName,
            abb  : newDeptAbb,
            user : newDeptUser,
            pass : newDeptPass
        }
    })
    .done(function(data){
        let result = JSON.parse(data);

        if(result.res == "success"){
            // alert("done saving data");

            $('#deptTable').DataTable().clear().destroy();
            setDeptTable();

            $("#updatedeptform").modal('hide')
            document.querySelectorAll("#updatedeptform input").empty;    
        
        }else{
            alert("Error, Something happened");
        }
    });
});




$("#btn-refresh").click(function(){

    $('#deptTable').DataTable().clear().destroy();
    setDeptTable();

    $("#newdeptform").modal('hide')
    document.querySelectorAll("#newdeptform input").empty;    

});
