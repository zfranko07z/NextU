import { Component, OnInit } from '@angular/core';

//======================Importar Servicios======================================
import { CarritoService } from '../services/carrito.service';
import { TiendaService } from '../services/tienda.service';
//======================Importar Modelos========================================
import { Producto } from '../models/Producto';
import { ProductoCarrito } from '../models/ProductoCarrito';
//==============================================================================

@Component({
  selector: 'carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  public listaCarrito : ProductoCarrito[] = []; //Crear un arreglo de productos para almacenar los productos guardados en el carrito

  constructor(private carritoService : CarritoService,
              private tiendaService : TiendaService) {

              }

  ngOnInit() {
    this.listaCarrito = this.carritoService.itemsCarrito();
    console.log('Frutas en Carrito', this.listaCarrito);
  }

  //==============Calcular Totales================================================
    total(){
      let total :number = 0 //Inicializar los totales
      let items = this.carritoService.listaCarrito; //Iniciar la variable items con los items actuales en el carrito
      for(let subtotal of items ){ //recorrer los items dentro del carrito
       total += subtotal.cantidad * subtotal.precio; //Realizar el producto entre la cantidad y el precio y agregarlo al valor guardado anteriormente
      }
      return total; //Devolver el valor de la suma total de todos lso subtotales del producto
    }

  //============Vaciar los items del carrito====================================
  vaciarCarrito(){
    sessionStorage.setItem('Carrito', '[]') //Asignar como parámetro un array vacío en formato string a la sesion Carrito
    this.listaCarrito = []; //Vaciar el arreglo de productos almacenados en el carrito
    this.carritoService.eliminarCarrito(this.listaCarrito); //Recorrer el arreglo de la lista almacenada en el servicio carritoService
    this.carritoService.listaCarrito = []; //Vaciar el arreglo en el servicio carritoService
    this.tiendaService.getProductos().subscribe() //Cargar de nuevo los productos desde la base de datos
  }


}
