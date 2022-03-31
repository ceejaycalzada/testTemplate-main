<?php
$servername = "localhost";
$username = "root";
$password = "";
$db = "esp_data";
// Create connection
$conn = mysqli_connect($servername, $username, $password,$db);
// Check connection
if (!$conn) {
   die('<script> console.log ("Connection to database failed!)</script>' . mysqli_connect_error());
}
echo '<script> console.log ("Connected to databse successfully")</script>';

$sql = "INSERT INTO sensorData (reading_values, reading_status, reading_time) VALUES ('10', 'feed tank optimal', '21-14-2022')";

if($conn->query($sql) === true){
    echo '<script> console.log ("Records inserted")</script>';
} else{
    echo "ERROR: Could not able to execute $sql. " . $mysqli->error;
}
?>