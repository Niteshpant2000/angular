import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CafesComponent } from './cafes/cafes.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUSComponent,
    ContactUSComponent,
    NoPageFoundComponent,
    HomeComponent,
    LoginComponent,
    CafesComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
