<?php

include 'config.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;



$key = 'tiagoartur';

function datenow()
{
  return date('Y-m-d H:i:s');
}

function datesimple()
{
  return date('Y-m-d');
}

function noHacking($input)
{
  global $conn;
  $var = mysqli_escape_string($conn, $input);
  $var = htmlspecialchars($var);
  return $var;
}

function mainHeader()
{


  header('Access-Control-Allow-Origin:*');
  header('Content-type: application/json');
}

function encodeHash($hash)
{
  global $key;
  return JWT::encode($hash, $key, 'HS256');
}

function decodeHash($value)
{
  global $key;
  return JWT::decode($value, new Key($key, 'HS256'));
}

function getStockName($id)
{
  global $conn;


  $sql = "SELECT * FROM stock WHERE id='$id'";
  $exec = mysqli_query($conn, $sql);

  $data = mysqli_fetch_assoc($exec);
  $code = $data['code'];

  return $code;

}
function getProductName($id)
{
  global $conn;


  $sql = "SELECT * FROM product WHERE id='$id'";
  $exec = mysqli_query($conn, $sql);

  $data = mysqli_fetch_assoc($exec);
  $name = $data['name'];

  return $name;

}


function getClientName($id)
{
  global $conn;


  $sql = "SELECT * FROM client WHERE id='$id'";
  $exec = mysqli_query($conn, $sql);

  $data = mysqli_fetch_assoc($exec);
  $name = $data['name'];

  return $name;

}



?>