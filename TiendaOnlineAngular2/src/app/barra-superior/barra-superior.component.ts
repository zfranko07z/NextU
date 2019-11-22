import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css']
})
export class BarraSuperiorComponent implements OnInit {

  public elemEnCarrito : Number;
  constructor(private itemsDelCarrito: CarritoService) {
  }

  ngOnInit() {
    this.elemEnCarrito = this.itemsDelCarrito.contadorCarrito();
  }


}
