<?php
//TODOS IVA
include_once('../config/config.php');

class IvaModel
{
    //procedimiteno todos() select * from
    // Método para obtener todos los registros de la tabla 'iva'
    public function todos()
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoParaConectar();
        $cadena = "SELECT * FROM iva";
        $datos = mysqli_query($con, $cadena);
        $result = array();

        if ($datos) {
            // Convertir los resultados a un array
            while ($row = mysqli_fetch_assoc($datos)) {
                $result[] = $row;
            }
        }

        $con->close();
        return $result;
    }
}
