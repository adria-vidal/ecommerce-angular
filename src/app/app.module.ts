import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ElementsModule } from './elements/elements.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarritoModule } from './carrito/carrito.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ElementsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarritoModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
