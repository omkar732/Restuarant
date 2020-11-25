import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRestuarantComponent } from './add-restuarant/add-restuarant.component';
import { UpdateRestuarantComponent } from './update-restuarant/update-restuarant.component';
import { ListRestuarantComponent } from './list-restuarant/list-restuarant.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule}  from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    AddRestuarantComponent,
    UpdateRestuarantComponent,
    ListRestuarantComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
