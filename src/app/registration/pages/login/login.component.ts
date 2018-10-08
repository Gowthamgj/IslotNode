import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { RegistrationserviceService } from '../registrationservice.service';
import { map } from 'rxjs/operators/map';
//import { map } from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  user: any;
  id;
  error: any;
  login: FormGroup;
  ngOnInit() {

  }

  constructor(public af: AngularFireAuth, private router: Router , private registerservice:RegistrationserviceService) {
    this.login = new FormGroup({
      email: new FormControl('', [ Validators.required, Validators.pattern(/^[a-z|A-Z][a-z|A-Z|0-9|]+@virtusa.com/)]),
      password: new FormControl('', Validators.required)
    });
}
onSubmit(formData){
  if(formData.valid)
  {
    console.log(formData.value);
    this.af.auth.signInWithEmailAndPassword(
      formData.value.email,    
      formData.value.password).
    then(
      (data)=>{
        console.log(data.user.uid);
        this.registerservice.getUserDetails(data.user.uid)
        .pipe(map(rsp=>rsp.json()))
        .subscribe(data=>{
          console.log(data);
          this.registerservice.userdata=data;
          console.log("userdata",data);
          for(let user in data)
          {
            console.log(data[user]);
            this.user=data[user];
          }
          console.log(this.user);
           console.log(this.user.eid);
           console.log(this.user.role);
            if(this.user.role=="Interviewers")
            {
              this.router.navigate(['/interviewer'])
            }
            if(this.user.role=="admin")
            {
              this.router.navigate(['/admin/dashboard'])
            }
            
        });
      // })
      // (success) => {
      //   this.id =  success.user.uid;
        
      // console.log(success.user.uid); 
      // console.log(this.registerservice.userrole);
      // if(this.registerservice.userrole==="admin")
      // {this.router.navigate(['/admin/dashboard'])
      // }
      // else{
      //   this.router.navigate(['/interviewer/interviewerdashboard'])
      // }
    }).catch(
      (err) => {
      console.log(err);
      this.error = err;
    })
   
  }

} 
}
