<?php
include 'db_connection.php';
 
echo '<script> console.log ("Connected to database successfully")</script>';
mysqli_close($conn);
?>