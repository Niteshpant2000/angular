import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gaming';
  static linkEnabled:boolean=false;
  link:boolean=true;
  static setLink(bool:boolean){
    AppComponent.linkEnabled=true;
  }
  setl(){
    this.link=AppComponent.linkEnabled;
  }
  



}
