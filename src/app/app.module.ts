import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';

import { AppComponent } from './app.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { LoginComponent } from './home/login/login.component';
import { SignupComponent } from './home/signup/signup.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { RoutingModuleModule } from './routing-module/routing-module.module';
import { ResaleModule } from './resale/resale.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeNavComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    AngularMaterialModule,
	  RoutingModuleModule,
	  ResaleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
