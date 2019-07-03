<?php 
function openJson()
{
    $data_file = fopen("./Storage/data.json","r");//fopen -> abre el archivo en la ruta especificada y "r" indica que lo leera
    $data_readed = fread($data_file, filesize("./Storage/data.json")); //fread -> lee el archivo abierto y con filesize -> leetodo el archivo asociadoandolo a formato JSON 
    $data = json_decode($data_readed, true);//con json_decode se convierte el archivo leido en un arreglo asociativo
    fclose($data_file);//cierra el archivo abierto
    return $data; //retornar los datos como un arreglo
    //print_r ($data);
};
function sendItems()
{
    echo json_encode(openJson());
}
function sendCities()
{
    $getCities = Array(); //Crear una matriz vacia a llenar
    foreach (openJson() as $cities => $city) { //Recorrer la información
      if(in_array($city['Ciudad'], $getCities)){ //Verificar si el valor existe en el array
        //Continuar
      }else{
        array_push($getCities, $city['Ciudad']); //Agregar la ciudad a la matriz
      }
    }
    echo json_encode($getCities);
}
function sendTypes()
{
    $getTypes = Array(); //Crear una matriz vacia a llenar
    foreach (openJson() as $types => $type) { //Recorrer la información
      if(in_array($type['Tipo'], $getTypes)){ //Verificar si el valor existe en el array
        //Continuar
      }else{
        array_push($getTypes, $type['Tipo']); //Agregar el tipo a la matriz
      }
    }
    echo json_encode($getTypes);
}
function filter($filtroCiudad, $filtroTipo, $filtroPrecio,$data)
{
    $itemList = Array(); //Matriz general para depositar los valores
    if($filtroCiudad == "" and $filtroTipo=="" and $filtroPrecio==""){ //Si se envia un formulario vacio
      foreach ($data as $index => $item) {
        array_push($itemList, $item); //Agregar los valores obtenidos a la matriz general
      }
    }else{ 
        //definicion de rango de precios
      $menor = $filtroPrecio[0]; //Obtener el maximo de precios
      $mayor = $filtroPrecio[1]; //Obtener el minimo de precios
    //- - - - - - FILTRO SOLO MODIFICANDO EL RANGO DE PECIOS - - - - - - - - - - - - - - - - - - 
        if($filtroCiudad == "" and $filtroTipo == ""){ //SI ciudad y tipo estan vacios
          foreach ($data as $items => $item) {
              $precio = precioNumero($item['Precio']);
          if ( $precio >= $menor and $precio <= $mayor){ //Comparar si el precio se encuentra dentro del rango de precio
              array_push($itemList,$item ); //Agregar los valores obtenidos a la matriz general
            }
          }
        }
    //- - - - - - FILTRO DE CIUDAD CONSIDERANDO UN RANGO DE PRECIOS - - - - - - - - - - - - - - -
        if($filtroCiudad != "" and $filtroTipo == ""){ 
            foreach ($data as $index => $item) {
              $precio = precioNumero($item['Precio']);
              if ($filtroCiudad == $item['Ciudad'] and $precio > $menor and $precio < $mayor){ //Comparar si el precio se encuentra dentro del rango de precio
                array_push($itemList,$item ); //Agregar los valores obtenidos a la matriz general
              }
          }
        }
    //- - - - - - FILTRO DE TIPO CONSIDERANDO EL RANGO DE PRECIOS - - - - - - - - - - - - - - - -
        if($filtroCiudad == "" and $filtroTipo != ""){ 
            foreach ($data as $index => $item) {
              $precio = precioNumero($item['Precio']);
              if ($filtroTipo == $item['Tipo'] and $precio > $menor and $precio < $mayor){ //Comparar si el precio se encuentra dentro de los valores del filtro
                array_push($itemList,$item ); //Agregar los valores obtenidos a la matriz general
              }
          }
        }
    //- - - - - - - FILTRO DE PRECIO CONSIDERANDO CIUDAD Y PRECIO - - - - - - - - - - - - - - - - -
        if($filtroCiudad != "" and $filtroTipo != ""){ 
            foreach ($data as $index => $item) {
              $precio = precioNumero($item['Precio']);
              if ($filtroTipo == $item['Tipo'] and $filtroCiudad == $item['Ciudad'] and $precio > $menor and $precio < $mayor){ //Comparar si el precio se encuentra dentro de los valores del filtro
                array_push($itemList,$item ); //Agregar los valores obtenidos a la matriz general
              }
          }
        }
    }
    echo json_encode($itemList); //Devolver el arreglo en formato JSON
};
//- - - - - - - - - Convertir la cadena de caracteres en numero - - - - - - - - - - - - - - - - - -
  function precioNumero($itemPrecio){ 
    $precio = str_replace('$','',$itemPrecio); //Eliminar el símbolo 
    $precio = str_replace(',','',$precio); //Eliminar la coma 
    return $precio; //Devolver el valor de tipo Numero sin caracteres especiales
  }

/*
function getInfo($searched_item){
    foreach (openJson() as $key => $value) { 
        return $value[$searched_item];      
        echo "<pre>"; echo ($value['Ciudad']); echo "</pre>";            
    }
}
*/
/*
    $response['Id'] = getInfo('Id');
    $response['Direccion'] = getInfo('Direccion');
    $response['Ciudad'] = getInfo('Ciudad');
    $response['Telefono'] = getInfo('Telefono');
    $response['Codigo Postal'] = getInfo('Codigo_Postal');
    $response['Tipo'] = getInfo('Tipo');
    $response['Precio'] = getInfo('Precio');     
    //echo "<pre>";
    echo json_encode($response);      
    //echo "</pre>";
*/
/*
foreach (getData() as $key => $value) { 
    $response['Id'] = $value['Id'];
    $response['Direccion'] = $value['Direccion'];
    $response['Ciudad'] = $value['Ciudad'];
    $response['Telefono'] = $value['Telefono'];
    $response['Codigo Postal'] = $value['Codigo_Postal'];
    $response['Tipo'] = $value['Tipo'];
    $response['Precio'] = $value['Precio'];     
    
    echo json_encode($response);    
    
}  
*/
/*
foreach(getData() as $key){
    $response['Ciudad'] = $key['Ciudad'];
    echo json_encode($response); 
  }
*/
?>