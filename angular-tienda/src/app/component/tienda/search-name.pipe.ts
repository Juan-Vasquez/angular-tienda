import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'searchName'
})
export class SearchNamePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const productos = []

    if (!value) return [];
    if (!arg || arg === "") return value;


    for (const producto of value) {
      if (producto.nombre.indexOf(arg) > -1) {
        productos.push(producto)
      }
    }
    return productos
  }

}
