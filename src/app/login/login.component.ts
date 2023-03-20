import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { AppComponent } from '../app.component';
import {User} from '../User';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  bLogin:boolean=true;
  bRegistration:boolean=false;
  userService:UserService;
  appComp:AppComponent;
  user:string="";
  pwd:string="";
  first:string="";
  last:string="";
  email:string="";
  password:string="";
  constructor(userService:UserService,appComp:AppComponent){
    this.userService=userService;
    this.appComp=appComp;
  }

  displayLogin(){
    this.bLogin=true;
    this.bRegistration=false;
  }
  displayRegistration(){
    this.bLogin=false;
    this.bRegistration=true;
  }
  searchUser(){
    for(let user of UserService.userArr){
      if(user.email==this.user){
        if(user.password==this.pwd){
          AppComponent.setLink(true);
          this.appComp.setl();
          break;
        }
        else{
          alert("Wrong Password");
        }
        
      }
    }
  }
  addUser(){
    UserService.addUser(this.first,this.last,this.email,this.password);
    this.bLogin=true;
  }
}
