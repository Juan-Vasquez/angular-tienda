import { Injectable } from '@angular/core';
import { Product } from '../model/product';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() { 
  }

  getLength(): number {
    const shopping = JSON.parse(localStorage.getItem('shopping'))

    return shopping.length
}

getShopping(): any {
    return JSON.parse(localStorage.getItem('shopping'))
}

isItems(): boolean {
    const shopping = JSON.parse(localStorage.getItem('shopping'))

    return shopping ? true : false
}

saveShopping(product: Product): void {
    let products = []

    if (localStorage.getItem('shopping') === null) {
        products = []
        products.push(product)
        localStorage.setItem('shopping', JSON.stringify(products))
    } else {
        products = JSON.parse(localStorage.getItem('shopping'))
        products.push(product)
        localStorage.setItem('shopping', JSON.stringify(products))
    }
}

deleteShopping() {
    localStorage.removeItem('shopping')
}


}
