import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './commons/header/header.component';
import { HomeComponent } from './commons/home/home.component';
import { NavbarComponent } from './commons/navbar/navbar.component';
import { CustomerComponent } from './customer/customer.component';


const routes: Routes = [
  {path:'', component: Component},
  {path:'home', component: HomeComponent},
  {path:'header', component: HeaderComponent},
  {path:'navbar', component: NavbarComponent},
  {path:'customer', component: CustomerComponent},
  {path:'**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
