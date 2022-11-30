import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './elements/nav/nav.component';
import { LoginComponent } from './elements/login/login.component';
import { FooterComponent } from './elements/footer/footer.component';
import { RegisterComponent } from './elements/register/register.component';
import { TableUsersComponent } from './elements/table-users/table-users.component';
import { CategoriesComponent } from './elements/categories/categories.component';
import { PerfilComponent } from './elements/perfil/perfil.component';

import { ShopCartComponent } from './carrito/shop-cart/shop-cart.component';

import { NewsletterComponent } from './elements/newsletter/newsletter.component';
import { ArticulosComponent } from './elements/articulos/articulos.component';
import { DetalleProductoComponent } from './elements/detalle-producto/detalle-producto.component';
import { ContactoComponent } from './elements/contacto/contacto.component';
import { NosotrosComponent } from './elements/nosotros/nosotros.component';


const routes: Routes = [
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  {
    path: 'nav',
    component: NavComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'footer',
    component: FooterComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'tableUsers',
    component: TableUsersComponent,
  },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: 'perfil',
    component: PerfilComponent,
  },
  {

    path: 'shopcart',
    component: ShopCartComponent,
  },
  {
    path: 'newsletter',
    component: NewsletterComponent,

  },
  {
    path: 'articulos/:id',
    component: ArticulosComponent,
  },
  {
    path: 'detalleproducto/:id',
    component: DetalleProductoComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  },
  {
    path: 'nosotros',
    component: NosotrosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
