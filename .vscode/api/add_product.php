<?php
include 'config.php';
include 'function.php';
$url = file_get_contents('php://input');
$data = json_decode($url, true);
mainHeader();


$stock = noHacking(isset($_GET['
stock']) ? $_GET['stock'] : '1');
$client = noHacking(isset($_GET['client']) ? $_GET['client'] : '1');
$name = noHacking(isset($_GET['name']) ? $_GET['name'] : 'Processador gamer 2023');
$quantity = noHacking(isset($_GET['quantity']) ? $_GET['quantity'] : '2000');
$photo = noHacking(isset($_GET['photo']) ? $_GET['photo'] : 'https://github.com/waplaf.png');
$code = noHacking(isset($_GET['code']) ? $_GET['code'] : '85555');
$owner = noHacking(isset($_GET['owner']) ? $_GET['owner'] : 'Tiago Atipo');
$description = noHacking(isset($_GET['description']) ? $_GET['description'] : 'Lorem');


$sql = "INSERT INTO product (`stock_id`,`client_id`,`name`,`quantity`,`photo`,`code`,`owner`,`description`) VALUE ('$stock','$client','$name','$quantity','$photo','$code','$owner','$description')";
$exec = mysqli_query($conn, $sql);



if (mysqli_affected_rows($conn) == true) {
  echo json_encode('Produto cadastrado com suscesso');
  $last_insert_id = mysqli_insert_id($conn);

  $sql = "INSERT INTO history (`type`,`product`) VALUES ('ENTRADA','$last_insert_id')";
  $exec = mysqli_query($conn, $sql);

  if (mysqli_affected_rows($conn) == false) {
    echo json_encode("Erro guardando historico de entrada");

  }

} else {
  echo json_encode('does not exist');
}



mysqli_close($conn);
?>