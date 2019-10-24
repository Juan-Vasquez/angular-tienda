import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/product';

@Component({
  selector: 'detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  products = {}

  constructor(private _Product: ProductService, private rout: ActivatedRoute) { 
    const id = this.rout.snapshot.paramMap.get('id')
    this._Product.getProuctoId()
    .subscribe(
      res => {
        for(let i in res){
          if(id == res[i].id){
            this.products = res[i]
          }
        }
      }
    )
  }


  ngOnInit() {
  }

}
