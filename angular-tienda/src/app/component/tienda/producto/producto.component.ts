import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input() product: Product;

  constructor(private _carrito: CarritoService) { }

  addProduct(units: number) {
    this.product.selectedUnits = units;
    this._carrito.saveShopping(this.product);
  }

  ngOnInit() {

  }

}
