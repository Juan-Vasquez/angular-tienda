import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css']
})
export class BarraSuperiorComponent implements OnInit {

  isShopping = false
  productsLength: Number

  constructor(private _carrito: CarritoService, private rout: Router) {
    this.isShopping = this._carrito.isItems()

    if (this.isShopping ) {
      this.productsLength = this._carrito.getLength()
    }
  }

  Logout() {
    this._carrito.deleteShopping()
    this.rout.navigate(['/'])
  }

  ngOnInit() {
  }

}
