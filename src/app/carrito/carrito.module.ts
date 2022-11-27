import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopCartComponent } from './shop-cart/shop-cart.component';



@NgModule({
  declarations: [
    ShopCartComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ShopCartComponent]
})
export class CarritoModule { }
