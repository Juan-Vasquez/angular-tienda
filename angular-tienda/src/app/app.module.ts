import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { TiendaComponent } from './component/tienda/tienda.component';
import { BarraSuperiorComponent } from './component/barra-superior/barra-superior.component';
import { DetalleProductoComponent } from './component/detalle-producto/detalle-producto.component';
import { SearchNamePipe } from './component/tienda/search-name.pipe';
import { CarritoComponent } from './component/carrito/carrito.component';
import { ProductoComponent } from './component/tienda/producto/producto.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TiendaComponent,
    BarraSuperiorComponent,
    DetalleProductoComponent,
    SearchNamePipe,
    CarritoComponent,
    ProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
