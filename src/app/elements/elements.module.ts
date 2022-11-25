import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [NavComponent, LoginComponent],
  imports: [CommonModule],
  exports: [NavComponent,LoginComponent],
})
export class ElementsModule {}
