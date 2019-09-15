import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModuleModule } from './routing-module.module';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductsComponent } from './products/products.component';
import { MyproductsComponent } from './myproducts/myproducts.component';
import { SettingComponent } from './setting/setting.component';

@NgModule({
  imports: [
    CommonModule,
    RoutingModuleModule,

  ],
  declarations: [HomeComponent, ProfileComponent, ProductsComponent, MyproductsComponent, SettingComponent]
})
export class ResaleModule { }
