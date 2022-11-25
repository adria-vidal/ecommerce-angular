import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CestaComponent } from './carrito/cesta/cesta.component';
import { DireccionComponent } from './carrito/direccion/direccion.component';
import { EntregaComponent } from './carrito/entrega/entrega.component';
import { FooterComponent } from './elements/footer/footer.component';
import { MetodoComponent } from './carrito/metodo/metodo.component';
import { NavbarComponent } from './carrito/navbar/navbar.component';
import { ResumenComponent } from './carrito/resumen/resumen.component';
import { AboutComponent } from './elements/about/about.component';
import { ArticulosComponent } from './elements/articulos/articulos.component';
import { BuscadorComponent } from './elements/buscador/buscador.component';
import { CategoriasComponent } from './elements/categorias/categorias.component';
import { ContactoComponent } from './elements/contacto/contacto.component';
import { DetalleComponent } from './elements/detalle/detalle.component';
import { LoginComponent } from './elements/login/login.component';
import { LoginAdminComponent } from './elements/login-admin/login-admin.component';
import { LoginClientComponent } from './elements/login-client/login-client.component';
import { NavComponent } from './elements/nav/nav.component';
import { RegistroComponent } from './elements/registro/registro.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'cesta',
    component: CestaComponent,
  },
  {
    path: 'direccion',
    component: DireccionComponent,
  },
  {
    path: 'entrega',
    component: EntregaComponent,
  },
  {
    path: 'footer-shop',
    component: FooterComponent,
  },
  {
    path: 'metodo',
    component: MetodoComponent,
  },
  {
    path: 'navbar',
    component: NavbarComponent,
  },
  {
    path: 'resumen',
    component: ResumenComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'articulos',
    component: ArticulosComponent,
  },
  {
    path: 'buscador',
    component: BuscadorComponent,
  },
  {
    path: 'categorias',
    component: CategoriasComponent,
  },
  {
    path: 'categorias',
    component: CategoriasComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  },
  {
    path: 'detalle',
    component: DetalleComponent,
  },
  {
    path: 'footer',
    component: FooterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'login-admin',
    component: LoginAdminComponent,
  },{
    path: 'login-client',
    component: LoginClientComponent,
  },
  {
    path: 'nav',
    component: NavComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class AppRoutingModule {}
