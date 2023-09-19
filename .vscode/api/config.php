<?php
$database = 'porto';
$server = 'localhost';
$user = 'root';
$pass = '';
$conn = mysqli_connect($server, $user, $pass, $database);
$conn->set_charset('utf8mb4');

if (!$conn) {
    echo json_encode('error connecting to the database');
}

?>