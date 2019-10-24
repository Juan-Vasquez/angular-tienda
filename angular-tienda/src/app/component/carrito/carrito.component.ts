import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  products: Product[] = []
  total = 0;

  constructor(private _carrito: CarritoService, private _product: ProductService, private rout: Router) {
    this.products = this._carrito.getShopping();

    if (this._carrito.isItems()) {
      for (const product of this.products) {
        product.subtotal = this.subtotal(product.selectedUnits, product.precio);
        this.total += product.subtotal;
      }
    }

  }

  //Calcular Totales
  subtotal(units: number, price: number) {
    return units * price
  }

  //Vaciar los items del carrito
  cancelar() {
    this._carrito.deleteShopping();
    this.rout.navigate(['/tienda']);
  }

  pagar() {
    this._product.getProducts().subscribe(res => {
      this.products = res.products
    });
    this._carrito.deleteShopping();
    this.rout.navigate(['/tienda']);
  }

  ngOnInit() {
  }

}
