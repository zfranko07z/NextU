<?php
require ('library.php');
//alamcena los datos enviados por el formulario JS  en variables utilizadas en la funcion filter como parametros
$filtroCiudad = $_GET['filtro']['Ciudad'];
$filtroTipo = $_GET['filtro']['Tipo'];
$filtroPrecio =  $_GET['filtro']['Precio'];
$getData = openJson(); //Leer la informacion del archivo json.
filter($filtroCiudad, $filtroTipo, $filtroPrecio,$getData);















































/*
$file = fopen("Storage/data.json", "r") or die("No se puede abrir el archivo");
$json = fread($file, filesize('Storage/data.json'));
$data = json_decode($json, true);
//$datos = json_encode($data);

//echo $datos;




//echo $data['Ciudad'];
foreach($data as $index){
  $ciudad['Ciudad'] = $index['Ciudad'];
  echo json_encode($ciudad); 
}

/*
foreach($data as $index){
  $tipo = $index['Tipo'];
  echo $tipo.'</br>';
}

foreach($data as $index){
  $precio = $index['Precio'];
  echo $precio.'</br>';
}
*/




























#function leerJson(){
  //$file = file_get_contents("Storage/data.json"); //almacenar el archivo
  //$fileData = json_decode($file,true); //decodificar el JSON
  //$fileArray = Array ($fileData); //convertir a arreglo de JSON a PHP
  //print_r ($fileArray); //visualizar el arreglo
  //print_r ($file);
  //echo $file;
  //return ($fileData);
  //$position = '0';
  //$ciudad = $fileData->$position->Direccion;
  #echo $ciudad;
  /*
  foreach ($fileData[0] as $position => $value) {
    $ciudad = $fileData->$position->$value[Id];
    echo $ciudad;
  }

  echo "<pre>";
  print_r ($fileData);
  echo "</pre>";
  //echo $json[$fileData][3]['Direccion'];
  */
#};
  
#leerJson();




















//Leer la informacion que se encuentra en data.JSON
/*
function readData(){
  $abriendoArchivo = fopen('Storage/data.json');//abrimos el archivo data
  $lellendoArchivo = fread($abriendoArchivo); //reemos y recoremos toda la informacion del archivo data.JSON
  $archivoData = json_decode($lellendoArchivo, true);//decodificamos la informacion, convirtiendola nuevamente en un archivo JSON para ser manipulado
  fclose($archivoData);//cerramos el archivo data.JSON 
  return ($archivoData);//regresamos para manipular el archivo data.Json
}
$getData = readData(); //instanciamos en una variable la funcion que lee el archivo data.json
*/

//echo "se recibio el consulta";

 ?>
