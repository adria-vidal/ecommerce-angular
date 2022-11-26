import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './elements/nav/nav.component';
import { LoginComponent } from './elements/login/login.component';
import { FooterComponent } from './elements/footer/footer.component';
import { RegisterComponent } from './elements/register/register.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
