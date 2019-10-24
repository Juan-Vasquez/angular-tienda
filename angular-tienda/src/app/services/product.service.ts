import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private _http: HttpClient) { }

  //Funcion de consultar todos los productos
  getProducts(): Observable<any> {
    return this._http.get<any>('https://angular-tienda-dc239.firebaseio.com/.json')
  }

  getProuctoId(): Observable<any> {
    return this._http.get<any>('https://angular-tienda-dc239.firebaseio.com/products/.json')
  }





}
