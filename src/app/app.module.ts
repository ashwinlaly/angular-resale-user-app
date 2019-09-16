import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { RoutingModuleModule } from './routing-module/routing-module.module';
import { ResaleModule } from './resale/resale.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { LayoutModule } from '@angular/cdk/layout';

import { AngularMaterialModule } from './angular-material.module';
import { ApplicationRoutingModule } from './application-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    AngularMaterialModule,
    ApplicationRoutingModule,
	RoutingModuleModule,
	ResaleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
