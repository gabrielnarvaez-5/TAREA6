<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER["REQUEST_METHOD"];
if ($method == "OPTIONS") {
    die();
}

// TODO: Controlador de IVA

require_once('../models/iva.model.php');
error_reporting(0);
$iva = new IvaModel();

switch ($_GET["op"]) {
    case 'todos': // Procedimiento para cargar todos los registros de IVA
        $datos = $iva->todos();
        echo json_encode($datos);
        break;

    // Puedes agregar otros casos aquí según sea necesario, como 'uno', 'insertar', etc.

    default:
        echo json_encode(["error" => "Invalid operation."]);
        break;
}
