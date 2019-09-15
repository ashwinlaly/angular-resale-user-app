import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductsComponent } from './products/products.component';
import { MyproductsComponent } from './myproducts/myproducts.component';
import { SettingComponent } from './setting/setting.component';

const routes : Routes = [
  { 
    path : 'home' , 
    component : HomeComponent,
    children : [
      { path : 'products', component : ProductsComponent},
      { path : 'setting' , component : SettingComponent},
      { path : 'myproduct' , component : MyproductsComponent},
      { path : 'profile', component : ProfileComponent }
    ]
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports : [
    RouterModule
  ]
})
export class RoutingModuleModule { }
