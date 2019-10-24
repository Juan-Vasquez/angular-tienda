import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/product';

@Component({
  selector: 'tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  products: Product[] = []
 
  constructor(private _product: ProductService) {
    this.getProducts()
  }

  //Extraer los productos de la base de datos
  getProducts() {
    this._product.getProducts()
      .subscribe(res => {
        this.products = res.products
      })
  }

  ngOnInit() {
  }

}
