import { Component } from '@angular/core';
import {CafesService} from '../cafes.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cafeservice:CafesService;
  constructor(cafesservice:CafesService){
    this.cafeservice=cafesservice;

  }
  setID(id:number){
    this.cafeservice.setSomething(id);
    
  }

}
