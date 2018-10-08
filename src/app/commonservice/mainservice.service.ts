import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MainserviceService {
  userId: any;
  user: any;
  updateAdminProfile;
  constructor(private http:Http) {
    this.updateAdminProfile = false;
  }
userIdGeneration(){
  this.http.get('https://islotproject-3175e.firebaseio.com/Users.json')
  .subscribe(rsp=>{
    this.user=rsp.json(),
    console.log(rsp.json());
    this.userId=Object.keys(this.user).length;
    console.log(this.userId);
  })
}
}
