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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
