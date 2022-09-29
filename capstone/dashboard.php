<?php

include './config/header.php';

?>




<div class="container-fluid row" id="whole-container">

<div class="col-2" id="sidebar">

<?php       include './config/sidebar.php'    ?>


</div>
    <div class="col-10 " id="content">

        <div class="container-fluid" id="samp-header">
            <p class="h4"> <strong>Dashboard</strong> <br> Welcome Admin</p>
            <hr>
        </div>
        



<?php       include './config/dashboard.contents.php'    ?>

        


</div>



</div>


<?php

include './config/footer.php';



?>