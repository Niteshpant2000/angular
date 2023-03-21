import { Component } from '@angular/core';
import { CafesService } from '../cafes.service';
import {Cafe} from '../Cafe';

@Component({
  selector: 'app-cafes',
  templateUrl: './cafes.component.html',
  styleUrls: ['./cafes.component.css']
})
export class CafesComponent {
  cafeservice:CafesService;
  id:number;
  cafe:Cafe;
  cafeArr:Cafe[];
  bdisplay=false;
  ngOnInit(){}
  displayStyle:any[]=[];
  constructor(cafeservice:CafesService){
    this.cafeservice=cafeservice;
    this.id=this.cafeservice.getID();
    this.cafe=this.cafeservice.cafeArr[this.id-101];
    this.cafeArr=this.cafeservice.cafeArr;
    this.setDisplay();
  }
  setDisplay(){
    for(let i in this.cafe.menu){
      this.displayStyle.push("none");
    }
  }
  openPopup(index:number){
    this.displayStyle[index]="block";

  }
  closePopup(index:number){
    this.displayStyle[index]="none";
  }
  
}
