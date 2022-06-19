import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
  {path:"home" , component:HomeComponent},
  {path:"" , redirectTo:"home" ,pathMatch:"full"},
  {path:"products", component:ProductsComponent},
  {path:"cart" ,component:CartComponent},
  {path:"checkout" , component:CheckoutComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
