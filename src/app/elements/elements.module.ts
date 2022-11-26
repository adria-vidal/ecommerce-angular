import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [NavComponent, LoginComponent, FooterComponent, RegisterComponent],
  imports: [CommonModule],
  exports: [NavComponent,LoginComponent,FooterComponent,RegisterComponent]
})
export class ElementsModule {}
