import { CartComponent } from './Component/cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './Component/header/header.component';
import { ProductComponent } from './Component/product/product.component';

const routes: Routes = [
  {
    path:"",
    component:HeaderComponent
  },{
    path:"",
    component:CartComponent
  },
  {
    path:"",
    component:ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
