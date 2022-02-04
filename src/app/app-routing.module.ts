import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { GetAllBooksComponent } from './Components/get-all-books/get-all-books.component';
import { QuickviewComponent } from './Components/quickview/quickview.component';
import { GetCartComponent } from './Components/get-cart/get-cart.component';
import { GetWishListComponent } from './Components/get-wish-list/get-wish-list.component';
import { AuthenticationGuard } from './Components/authentication.guard';

const routes: Routes = [
  {path: '', redirectTo: '/signup', pathMatch: 'full'},
  {path: 'signup',component:SignupComponent},
  {path: 'login',component:LoginComponent},
  {path: 'dashboard',component:DashboardComponent,
  // canActivate:[AuthenticationGuard],
  children:[
    {path:'', redirectTo:"/dashboard/books", pathMatch:'full' },
    {path:'books', component:GetAllBooksComponent},
    {path: 'quickview/:bookid', component:QuickviewComponent},
    {path: 'getCart' , component:GetCartComponent},
    {path: 'getWishList' , component:GetWishListComponent}
   ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
