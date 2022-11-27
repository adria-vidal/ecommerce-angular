import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { TableUsersComponent } from './table-users/table-users.component';
import { CategoriesComponent } from './categories/categories.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

@NgModule({
  declarations: [NavComponent, LoginComponent, FooterComponent, RegisterComponent, TableUsersComponent, CategoriesComponent, PerfilComponent, NewsletterComponent],
  imports: [CommonModule],
  exports: [NavComponent,LoginComponent,FooterComponent,RegisterComponent,PerfilComponent]
})
export class ElementsModule {}
