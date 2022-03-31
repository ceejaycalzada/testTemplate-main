<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <!--[if IE]>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <![endif]-->
    <title>Smart Poultry Monitoring and Control</title>
    <!-- BOOTSTRAP CORE STYLE  -->
    <link href="assets/css/bootstrap.css" rel="stylesheet" />
    <!-- FONT AWESOME STYLE  -->
    <link href="assets/css/font-awesome.css" rel="stylesheet" />
    <!-- CUSTOM STYLE  -->
    <link href="assets/css/main-style.css" rel="stylesheet" />
    <link href="assets/css/style2.css" rel="stylesheet" />
    <!-- GOOGLE FONT -->
    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />
    <!--MQTT Conn-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.2/mqttws31.min.js" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.2/jquery.min.js" type="text/javascript"></script>
    <script src="https://cdn3.devexpress.com/jslib/17.1.6/js/dx.all.js" type="text/javascript"></script>
</head>

<body>
    <!-- LOGO HEADER END-->
    <section class="menu-section">
        <div class="container">
            <div class="row row-no-gutters">
                <div class="col-md-12">
                    <div class="navbar-collapse collapse ">
                        <ul id="menu-top" class="nav navbar-nav navbar-right">
                            <li><a href="index.html">Dashboard</a></li>
                            <li><a href="water.html">Water Level</a></li>
                            <li><a href="feed.html" class="menu-top-active">Feeds Level</a></li>
                            <li><a href="control.html">Controls/Switches</a></li>
                            <li><a href="#">About</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- MENU SECTION END-->
    <div class="content-wrapper">
        <div class="container">
            <div class="row pad-botm">
                <div class="col-md-12">
                    <h3 class="header-line">Feeds Level Monitor</h3>
                    <h4>Status Summary</h4>
                    <?php
                        $con=mysqli_connect("localhost","root","","esp_data");
                        // Check connection
                        if (mysqli_connect_errno())
                        {
                        echo "Failed to connect to MySQL: " . mysqli_connect_error();
                        }

                        $result = mysqli_query($con,"SELECT * FROM sensorData");

                        echo "<table>
                        <tr>
                        <th>Values</th>
                        <th>Status</th>
                        <th>Reading Time</th>
                        </tr>";

                        while($row = mysqli_fetch_array($result))
                        {
                        echo "<tr>";
                        echo "<td>" . $row['reading_values'] . "</td>";
                        echo "<td>" . $row['reading_status'] . "</td>";
                        echo "<td>" . $row['reading_time'] . "</td>";
                        echo "</tr>";
                        }
                        echo "</table>";

                        mysqli_close($con);
                        ?>
                </div>
            </div>
        </div>
    </div>

    <!-- CONTENT-WRAPPER SECTION END-->
    <section class="footer-section">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                   &copy; Thesis Theme 2022 | Dakami Amin
                </div>

            </div>
        </div>
    </section>
      <!-- FOOTER SECTION END-->
    <!-- JAVASCRIPT FILES PLACED AT THE BOTTOM TO REDUCE THE LOADING TIME  -->
    <!-- CORE JQUERY  -->
    <script src="assets/js/jquery-1.10.2.js"></script>
    <!-- BOOTSTRAP SCRIPTS  -->
    <script src="assets/js/bootstrap.js"></script>
    <!-- CUSTOM SCRIPTS  -->
    <link rel="icon" href="favicon.ico">
    <link href="assets/css/tables.css" rel="stylesheet">
</body>
</html>
