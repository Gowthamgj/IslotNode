import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RegistrationserviceService {
  userrole;
  user;
  userdet;
  userdata;
  constructor(private http:Http)
  {
this.userdet = {};
  }
  sendUserDetails(data)
  {
      const url="https://islotproject-3175e.firebaseio.com/Users.json ";
      this.http.post(url,data).subscribe(rsp=>{this.user=rsp.json(),
          console.log(rsp.json());
        // this.userdet = rsp.json();
      })
  }
  getUserDetails(userid)
  {
    const userDetail="eid"
    const url=`https://islotproject-3175e.firebaseio.com/Users.json?orderBy=\"${userDetail}\"&equalTo=\"${userid}\"`;
    console.log(url);
    return this.http.get(url);
  }
  

}
