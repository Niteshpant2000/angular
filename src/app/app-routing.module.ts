import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUSComponent } from './about-us/about-us.component';
import { CafesComponent } from './cafes/cafes.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"About",component:AboutUSComponent},
  {path:"Contact",component:ContactUSComponent},
  {path:"Login",component:LoginComponent},
  {path:"Explore",component:CafesComponent},
  {path:"**",component:NoPageFoundComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
