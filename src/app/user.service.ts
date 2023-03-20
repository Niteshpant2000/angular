import { Injectable } from '@angular/core';
import {User} from './User';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  static userArr:User[]=[];
  static user:User={firstName:"",lastName:"",email:"",password:""};
  constructor() {
   
   }
  static addUser(first:string,last:string,email:string,password:string){
    UserService.user={firstName:first,lastName:last,email:email,password:password}
    UserService.userArr.push(UserService.user);
  }
}
