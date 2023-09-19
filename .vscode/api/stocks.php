<?php
include 'config.php';
include 'function.php';
$url = file_get_contents('php://input');
$data = json_decode($url, true);
mainHeader();

$id = noHacking(isset($_GET['id']) ? $_GET['id'] : '');

$sql = "SELECT * FROM stock WHERE warehouse_id='$id'";
$exec = mysqli_query($conn, $sql);
$total = mysqli_num_rows($exec);

$results = array();

if (mysqli_num_rows($exec) > 0) {


  while ($data = mysqli_fetch_assoc($exec)) {

    $wharehouse = array(
      'id' => intval($data['id']),
      'code' => $data['code'],
      'location' => $data['location'],
      'information' => $data['information'],
      'operation' => $data['operation'],
      'date' => $data['date'],
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