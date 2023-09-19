<?php
include 'config.php';
include 'function.php';
$url = file_get_contents('php://input');
$data = json_decode($url, true);
mainHeader();


$sql = "SELECT * FROM warehouse";
$exec = mysqli_query($conn, $sql);
$total = mysqli_num_rows($exec);

$results = array();

if (mysqli_num_rows($exec) > 0) {


  while ($data = mysqli_fetch_assoc($exec)) {

    $wharehouse = array(
      'id' => intval($data['id']),
      'name' => $data['name'],
      'width' => $data['width'],
      'height' => $data['heigth'],
      'description' => $data['description']
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