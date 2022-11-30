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
import { ArticulosComponent } from './articulos/articulos.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';



@NgModule({
  declarations: [
    NavComponent,
    LoginComponent,
    FooterComponent,
    RegisterComponent,
    TableUsersComponent,
    CategoriesComponent,
    PerfilComponent,
    NewsletterComponent,
    ArticulosComponent,
    DetalleProductoComponent,
    ContactoComponent,
    NosotrosComponent,
  ],
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  exports: [
    NavComponent,
    LoginComponent,
    FooterComponent,
    RegisterComponent,
    PerfilComponent,
    NewsletterComponent,
    ArticulosComponent,
    DetalleProductoComponent,
    FormsModule
  ],
})
export class ElementsModule {}
