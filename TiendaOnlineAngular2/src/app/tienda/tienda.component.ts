import { Component, OnInit } from '@angular/core';

//==================================================
import { FormGroup, FormControl, Validators } from '@angular/forms'; //Importar los componentes ForModule, FormControl y Validator para manejar y validar los formularios
import { TiendaService} from '../services/tienda.service';
import { CarritoService } from '../services/carrito.service';
//======================Importar Modelos========================================

import { Producto } from '../models/Producto';
//=====================Importar Pipes=============================
import { ProductoCarrito } from '../models/ProductoCarrito';

@Component({
  selector: 'tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  public listProductos = [];
  public productosArray = [];
  public productoIngresado : string;
  public producto = '';
  private titulo : string;


  public values : string = '';

  public productoCarrito : ProductoCarrito;

  constructor(private data: TiendaService, private carritoService: CarritoService) {
    this.titulo = 'Catalogo de Productos';


  }

  ngOnInit() {
    this.data.getProductos().subscribe(listProductos =>{
      this.listProductos = listProductos;

      console.log('PRODUCTOS', listProductos);
    });

  }

  //================Buscar Producto ===========
  public filtrarProducto(filtro:string){
    this.productosArray = this.listProductos;  //Inicializar el catálogo de productos con la información de la base de datos
    filtro.toLowerCase(); //Pasar la infromación a minúsculas para hacerlas coincidir con el parámetro nombre en la base de datos
    let itemMatch : Producto[] = []; //Inicializar el arreglo de productos coincidentes
    for(let item of this.productosArray){ //Recorrer el arreglo de productos en el Catalogo
      let nombre = item.nombre.toLowerCase(); //crear una variable para comparar los productos
      if(nombre.includes(filtro)){ //Verificar que algún item del catálogo contenga los caracteres especificados en el campo de búsqueda
        itemMatch.push(item)} //Agregar el producto coincidente al arreglo
      }
        //console.log('Busqueda', itemMatch);
        //return itemMatch; //Devolver el arreglo a la vista
      this.listProductos = itemMatch;
      if(filtro === ''){
        this.data.getProductos().subscribe(listProductos =>{
          this.listProductos = listProductos;

        });
      }
    }


    //================Agregar Productos=============================================
  agregarProducto(id:string, value:number){
    let idN:number;
    idN = Number(id);
    for (let item of this.listProductos){//Recorrer el catálogo de productos
      if(item.id == idN){ //Verificar que el id del item actual corresponda con el item del catálogo
        if(item.disponible < value){//Si la disponibilidad es menor a la cantidad a añadir al carrito
          window.alert('Máxima existencia es: '+ item.disponible); //Mostrar un mensaje de alerta con la cantidad maxima disponible
        }else{
          let cantidadActual = item.disponible; //Crear una variable con la cantidad disponible en el catalogo
          //Convertir el objeto de la tienda en objeto carrito
          this.productoCarrito = {
            "id": item.id,
            "descripcion": item.nombre,
            "imagen": item.imagen,
            "precio": item.precio,
            "cantidad": value //Asignar el valor enviádo como parámetro desde el campo de texto del producto
          }
          this.carritoService.verificarCarrito(this.productoCarrito); //Verificar si el producto se encuentra en el carrito
          item.disponible = cantidadActual - value; //Actualizar el valor del producto en el catalogo
        }
      }
    }
  }


}
