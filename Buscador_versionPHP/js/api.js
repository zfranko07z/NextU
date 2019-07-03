$(window).on("load",function(){
  init();
    })
function init(){
  getCities();
  getTypes();
};
  $('#mostrarTodos').click(function(){
    searchItems();
  });
  $('#formulario').on('submit', function(event){
    event.preventDefault();
    searchItems();
  })
//-----------------------------------------------------------------------------------------
function searchItems(){
  var filtro = getFiltros()
  console.log(filtro);
  $.ajax({
    url: "buscador.php",
    dataType: "json",
    type: 'GET',
    data:{filtro},
    success: function(response){
        renderView(response);
        console.log(response);
    },
    error: function(){
      alert('Algo salio mal'); 
    }
  })
}
//-----------------------------------------------------------------------------------------
function getFiltros(){
  var rango = $('#rangoPrecio').val(), 
  rango = rango.split(";") //separar los valores en un array
  //if (filter == false){ //Verificar si no se aplicaran filtros Asignar valores vacios
    var getCiudad = '',
        getTipo = '',
        getPrecio = ''
  //}else{
    var getPrecio = rango, //Asignar el valor del rango de precios
        getCiudad = $('#selectCiudad option:selected').val(), //Asignar el valor de la ciudad seleccionada
        getTipo = $('#selectTipo option:selected').val() //Asignar el valor del tipo seleccionado
  //}
    var filtro = { //Crear el objeto filtro con los valores respectivos
      Precio:getPrecio,
      Ciudad: getCiudad,
      Tipo: getTipo
    }
  return filtro; //este valor es la peticion que se enviara al servidor 
}
//-----------------------------------------------------------------------------------------
function renderView(response) {
  $.each(response, function(index, response){
    var contenido = $(`<div class="tituloContenido card">
                        <div class="row">
                          <div class="col s5"><img  class="responsive-img" src="img/home.jpg"></div>
                        <div class="col s7">
                          <ul>
                            <li><strong>Direccion: </strong>${response.Direccion}</li>
                            <li><strong>Ciudad: </strong>${response.Ciudad}</li>
                            <li><strong>Teléfono: </strong>${response.Telefono}</li>
                            <li><strong>Código Postal: </strong>${response.Codigo_Postal}</li>
                            <li><strong>Tipo: </strong>${response.Tipo}</li>
                            <li><strong>Precio: </strong><span style="color:orange">${response.Precio}</span></li>
                          </ul>
                        </div>
                      </div>                
                      </div>`);
    $('.colContenido').append(contenido);
  });
}
//-----------------------------------------------------------------------------------------
function getCities(){
  $.ajax({
    url:'./cities.php',
    type: 'GET',
    data:{},
    success:function(response){
      optionCities(response);
    }
  }).done(function(response) {
    var response=JSON.parse(response) 
    console.log(response);      
  })
}
function optionCities(response) {              
      $.each(JSON.parse(response), function(index, response){ //se parsea la respuesta del servior para ser manipulado por JS
        $('#selectCiudad').append(`<option value="${response}">${response}</option>`)
        $('select').material_select(); 
      });    
}
//-----------------------------------------------------------------------------------------
function getTypes(){
  $.ajax({
    url:'./types.php',
    type: 'GET',
    data:{},
    success:function(response){ 
      optionTypes(response);
    }
  }).done(function(response) {
    var response=JSON.parse(response) 
    console.log(response);      
  })
}
function optionTypes(response) {              
      $.each(JSON.parse(response), function(index, response){ 
        $('#selectTipo').append(`<option value="${response}">${response}</option>`)
        $('select').material_select(); 
      });    
}
//-----------------------------------------------------------------------------------------





























//Funcion JQuerry para mostrar todo el JSON en el DOM
/*
$(function(){
    $('#mostrarTodos').on('click', function(e){
      $.ajax({
        url:"Storage/data.json",
        type:"GET",
        typeData:JSON,
        data:{}
    }).done(function(data){ 
      $.each(data, function(indice, data){//este es un foreach de jquery para recorrer todo el arreglo cuando no se conoce el tamaño del mismo
          var option = $(`<div class="tituloContenido card">
                            <div class="row">
                              <div class="col s5"><img  class="responsive-img" src="img/home.jpg"></div>
                              <div class="col s7">
                                <ul>
                                  <li><strong>Direccion: </strong>${data.Direccion}</li>
                                  <li><strong>Ciudad: </strong>${data.Ciudad}</li>
                                  <li><strong>Teléfono: </strong>${data.Telefono}</li>
                                  <li><strong>Código Postal: </strong>${data.Codigo_Postal}</li>
                                  <li><strong>Tipo: </strong>${data.Tipo}</li>
                                  <li><strong>Precio: </strong><span style="color:orange">${data.Precio}</span></li>
                                </ul>
                              </div>
                            </div>                
                          </div>`);
          $('.colContenido').append(option);
          console.log(data);
          
       })
    })
  });
});
*/
/*
$(function(){
  $('#mostrarTodos').on('click', function(){
    //alert ('Realizar busqueda');
    //ejecutar la funcion que optenga la info de buscador.php
    Buscar();
  })
});

function Buscar(filter) {
  var filtro = getFiltros(filter)
// Consulta AJAX...
  $.ajax({
    url:'./buscador.php',
    type:'GET',
    data:{filtro},
    success:function(items){
      try {
        item = JSON.parse(items); //Analizar la cadena de texto como JSON
      } catch (e) {
        getError(500,'SyntaxError'); //Mostrar mensaje de error si existe error obteniendo la información
      }
      $.each(item, function(index,item){
        $('.colContenido').append( //Anexar los items que correspondan al filtro consultado
          '<div class="col s12 item">'+
            '<div class="card itemMostrado">'+
              '<img src="./img/home.jpg">'+
                '<div class="card-stacked">'+
                  '<div class="card-content">'+
                    '<p><b>Direccion: </b>'+item.Direccion+'</p>'+ //Obtener el valor de la propiedad Direccion del objeto
                    '<p><b>Ciudad: </b>'+item.Ciudad+'</p>'+ //Obtener el valor de la propiedad Ciudad del objeto
                    '<p><b>Teléfono: </b>'+item.Telefono+'</p>'+ //Obtener el valor de la propiedad Teléfono del objeto
                    '<p><b>Código postal: </b>'+item.Codigo_Postal+'</p>'+ //Obtener el valor de la propiedad Código Postal del objeto
                    '<p><b>Tipo: </b>'+item.Tipo+'</p>'+ //Obtener el valor Tipo del  objeto
                    '<p><b>Precio: </b><span class="precioTexto">'+item.Precio+'</span></p>'+ //Obtener el valor de la propiedad Precio del objeto
                  '</div>'+
                  '<div class="card-action">'+
                    '<a href="#">Ver más</a>'+
                  '</div>'+
                '</div>'+
            '</div>'+
          '</div>'
        )
      })
    }
  }).done(function(){
    alert('Busqueda Exitosa')
  }).fail(function(){
    alert('Fallo la Busqueda')
  })
}

function getFiltros(filter){
  var rango = $('#rangoPrecio').val(), //Obtener los valores maximos y minimos del input
  rango = rango.split(";") //separar los valores en un array

  if (filter == false){ //Verificar si no se aplicaran filtros Asignar valores vacios
    var getCiudad = '',
        getTipo = '',
        getPrecio = ''
  }else{
    var getPrecio = rango, //Asignar el valor del rango de precios
        getCiudad = $('#selectCiudad option:selected').val(), //Asignar el valor de la ciudad seleccionada
        getTipo = $('#selectTipo option:selected').val() //Asignar el valor del tipo seleccionado
  }

    var filtro = { //Crear el objeto filtro con los valores respectivos
      Precio:getPrecio,
      Ciudad: getCiudad,
      Tipo: getTipo
    }

  return filtro; //Devolver el objeto filtro
}

*/