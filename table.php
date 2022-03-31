<?php 
  session_start(); 

  if (!isset($_SESSION['username'])) {
  	$_SESSION['msg'] = "You must log in first";
  	header('location: login.php');
  }
  if (isset($_GET['logout'])) {
  	session_destroy();
  	unset($_SESSION['username']);
  	header("location: login.php");
  }
?>



<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <!--[if IE]>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <![endif]-->
    <title>FREE RESPONSIVE HORIZONTAL ADMIN</title>
    <!-- BOOTSTRAP CORE STYLE  -->
    <link href="assets/css/bootstrap.css" rel="stylesheet" />
    <!-- FONT AWESOME STYLE  -->
    <link href="assets/css/font-awesome.css" rel="stylesheet" />
    <!-- CUSTOM STYLE  -->
    <link href="assets/css/style.css" rel="stylesheet" />
    <!-- GOOGLE FONT -->
    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />
</head>

<body>
     <section class="menu-section">
        <div class="container">
            <div class="row ">
                <div class="col-md-12">
                    <div class="navbar-collapse collapse ">
                        <ul id="menu-top" class="nav navbar-nav navbar-right">
                            <li><a href="index.html" class="menu-top-active">DASHBOARD</a></li>
                           
                            <li><a href="water.php">Water Level</a></li>
                            
                            <li><a href="manure.php">Manure Cleaner</a></li>
                             <li><a href="feeds.php">Feeds Level</a></li>
                            <li><a href="light.php">Light</a></li>

                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </section>


     <h1 style="text-align:center">Add Item Here</h1>
            <body>
<form method="POST" class="form-inline" action="additem.php">
  <div class="form-group">
    <label for="name">Date</label>
    <input type="text" class="form-control" name="product_name" required/>
    
  </div>
  
  <div class="form-group">
        <label for="name">Quantity</label>
        <input type="number" name="quant" id="quant" min="1" max="">
    </div>
  <button type="submit" class="btn btn-default" name="add">Add</button>
 
</form> 
</body>
            
                
                   
                    <!-- Contextual Classes start -->
                    <div class="col-lg-6 mt-5">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="header-title">Eggs Collected A Day</h4>
                                <div class="single-table">
                                    <div class="table-responsive">
                                        <table class="table text-dark text-center">
                                            <thead class="text-uppercase">
                                                <tr class="table-active">
                                                  
                                                    <th scope="col">Date</th>
                                                   
                                                    <th scope="col">Quantity</th>
													 <th scope="col">Action</th>
													 

                                                    
                                                </tr>
                                            </thead>
                                            <tbody>
			<?php 
               $conn = new mysqli("localhost","root","","inventorymanagement");
               $sql = "SELECT * FROM product";
               $result = $conn->query($sql);
					$count=0;
               if ($result -> num_rows >  0) {
				  
                 while ($row = $result->fetch_assoc()) 
				 {
					  $count=$count+1;
                   ?>
                  
                   
                   <tr>
                    
                      <th><?php echo $row["product_name"] ?></th>
                      
                      <th><?php echo $row["quantity"]  ?></th>
					  
					  <th><a href="edit.php?id=<?php echo $row["product_id"] ?>">Edit</a> <a href="up"Edit</a><a href="delete.php?id=<?php echo $row["product_id"] ?>">Delete</a></th>
                    
                      
                    </tr>
            <?php
                 
                 }
               }

            ?>

                                            </tbody>
                                        </table>
           
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>


</div>   
                    </div>
                    <!-- Contextual Classes end -->
                   
        <!-- main content area end -->
      
<html>
<head>
	<title>Add Item</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
</head>

</html>
    






    
    <!-- page container area end -->
    <!-- offset area start -->
   
    <!-- offset area end -->
    <!-- jquery latest version -->
    <script src="assets/js/vendor/jquery-2.2.4.min.js"></script>
    <!-- bootstrap 4 js -->
    <script src="assets/js/popper.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/owl.carousel.min.js"></script>
    <script src="assets/js/metisMenu.min.js"></script>
    <script src="assets/js/jquery.slimscroll.min.js"></script>
    <script src="assets/js/jquery.slicknav.min.js"></script>

    <!-- others plugins -->
    <script src="assets/js/plugins.js"></script>
    <script src="assets/js/scripts.js"></script>
</body>

</html>
