import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/signup', pathMatch: 'full'},
  {path: 'signup',component:SignupComponent},
  {path: 'login',component:LoginComponent},
  // {path: 'dashboard',component:DashboardComponent,

  // children:[
  //   {path:'', redirectTo:"/dashboard/books", pathMatch:'full' },
  //   {path:'books', component:GetallBooksComponent},
  //   {path: 'quickview/:bookid', component:QuickviewComponent},
  //   {path: 'getCart' , component:GetCartComponent},
  //   {path: 'getWishlist' , component:GetWishlistComponent}
  // ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
