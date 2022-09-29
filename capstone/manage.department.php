<?php

include 'dbconnect.php';



?>







    <div class="container-fluid row" id="whole-container">

        <div class="col-2 bg-success" id="sidebar">asdfasd</div>
            <div class="col-10 " id="content">

                <div class="container-fluid" id="samp-header">
                    <p class="h4">Manage Departments</p>
                    <hr>
                </div>
                
                <div class="container-fluid pt-4 pb-3" id="btn-container">
                        <button class="btn btn-success me-5"><i class="bi bi-plus-circle"></i> Department</button>
                        <button class="btn btn-info me-1"><i class="bi bi-file-earmark-spreadsheet-fill" data-toggle="tooltip" data-placement="bottom" title="Import table"></i></button>
                        <button class="btn btn-warning" data-toggle="tooltip" data-placement="bottom" title="Export table"><i class="bi bi-printer-fill"></i></button>
                </div>

            <div class="container bg-light " id="box-content">
            <table class="text-center" id="departmentTable">  
        <thead>  
          <tr>  
            <th>Department Name</th>  
            <th>Abbreviation</th>  
            <th>Username</th>  
            <th>Password</th> 
            <th>Courses</th>
            <th>Teacher</th>
            <th>Students</th>
            <th>Actions</th>  
          </tr>  
        </thead>  
        <tbody id="dept-body">  

            <?php

                include '/xampp/htdocs/capstone/dbconnect.php';



                $fetch_dept = "SELECT * FROM department";
                $res = mysqli_query($conn,$fetch_dept);

                while($row = mysqli_fetch_assoc($res)){

            ?>

                        <tr class="dept-row">
                            <td><?php echo $row['dept_name'];  ?></td>
                            <td><?php echo $row['dept_abbreviation'];  ?></td>
                            <td><?php echo $row['dept_username'];  ?></td>
                            <td><?php echo $row['dept_password'];  ?></td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>

                            <td class="actions">
                                <button class="btn update-btn"  data-dept-id="<?php echo $row['dept_id'];  ?>" onclick="gotclicked(this.getAttribute('data-dept-id'))" ><i class="bi bi-pencil-square"></i></button>
                                <button class="btn delete-btn" ><i class="bi bi-trash-fill"></i></button>

                            </td>
                        </tr>
<?php

   }


?>

        </tbody>  
      </table>  
                
            </div>


        </div>



    </div>


   