import { Injectable } from '@angular/core';

//============================================

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireList, AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { log } from 'util';

import { Producto } from '../models/Producto';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  private productosCollections: AngularFirestoreCollection<Producto>;
  public producto: Observable<Producto[]>;
  public listadoProducto: Producto[];
  //=======Vbes para obtener una fruta==================
  private unProductoDoc: AngularFirestoreDocument<Producto>;
  private unProducto: Observable<Producto>;

  constructor(private afs: AngularFirestore) {
  this.productosCollections = afs.collection<Producto>('catalogo');
  this.producto = this.productosCollections.valueChanges();
  }

  public getProductos(){
    return this.producto = this.productosCollections.snapshotChanges()
    .pipe(map( changes =>{
      return changes.map( action =>{
        const data = action.payload.doc.data() as Producto;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  getUnProducto(idProducto: string) {
    this.unProductoDoc = this.afs.doc<Producto>(`catalogo/${idProducto}`);
    return this.unProducto = this.unProductoDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as Producto;
        data.id = action.payload.id;
        return data;
      }
    }));
  }

  

}
