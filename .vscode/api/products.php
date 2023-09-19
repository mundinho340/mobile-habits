<?php
include 'config.php';
include 'function.php';
$url = file_get_contents('php://input');
$data = json_decode($url, true);
mainHeader();


$id = noHacking(isset($_GET['id']) ? $_GET['id'] : '');

$sql = "SELECT product.id,product.name,product.quantity,product.photo,product.code,product.owner,product.description,product.stock_id,product.client_id FROM product JOIN stock ON product.stock_id=stock.id JOIN client ON product.client_id=client.id WHERE product.stock_id='$id'";
$exec = mysqli_query($conn, $sql);
$total = mysqli_num_rows($execy);

$results = array();

if (mysqli_num_rows($exec) > 0) {


  while ($data = mysqli_fetch_assoc($exec)) {

    $wharehouse = array(
      'id' => intval($data['id']),
      'code' => $data['code'],
      'owner' => $data['owner'],
      'description' => $data['description'],
      'stock' => getStockName($data['stock_id']),
      'cliente' => getClientName($data['client_id']),
    );

    $results[] = $wharehouse;

  }
  $response = array("status" => 200, "total" => $total, "results" => $results);

  echo json_encode($response);

} else {
  echo json_encode('does not exist');
}



mysqli_close($conn);
?>