import { Component, OnInit } from '@angular/core';

//========Importaciones===============================
import { TiendaService} from '../services/tienda.service';
import { Producto } from '../models/Producto';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  private productoElegido: Producto;

  constructor(private dataProducto: TiendaService, private route: ActivatedRoute) { }

  ngOnInit() {
    const idProducto = this.route.snapshot.params['id'];
    this.getDetails(idProducto);

  }

  getDetails(idProducto: string): void {
    this.dataProducto.getUnProducto(idProducto).subscribe(producto => {
      this.productoElegido = producto;
    });
    //console.log(productoElegido);
  }


}
