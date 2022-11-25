import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [NavComponent, LoginComponent, FooterComponent],
  imports: [CommonModule],
  exports: [NavComponent,LoginComponent,FooterComponent],
})
export class ElementsModule {}
