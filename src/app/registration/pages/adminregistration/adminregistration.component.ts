import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,AbstractControl,ValidationErrors} from '@angular/forms';
import {Http} from '@angular/http';
import {AngularFireAuth} from 'angularfire2/auth';
import { Router } from '@angular/router';
import { RegistrationserviceService } from '../registrationservice.service';
// import { Component, OnInit } from '@angular/core';
// import {FormGroup,FormControl,Validators,AbstractControl,ValidationErrors} from '@angular/forms';
// import {Http} from '@angular/http';
import { MainserviceService } from '../../../commonservice/mainservice.service';
@Component({
  selector: 'app-adminregistration',
  templateUrl: './adminregistration.component.html',
  styleUrls: ['./adminregistration.component.css']
})
export class AdminregistrationComponent implements OnInit {
  error: any;
  user: any;
  data: { "email": any; "mobileno":number;"eventPoints": any[];"id":string; "location": any; "role": string; "skills": any; "eid": any; "name": any; };
  
  id:FormGroup;
  isVisible;
  list: string[]=[
'Hyderabad',
  'Pune',
  'Chennai',
'Bangalore'];

  constructor(private mainservice : MainserviceService,public af: AngularFireAuth,public registationservice: RegistrationserviceService,private router: Router, private httpservice:Http) {
    this.isVisible = this.mainservice.updateAdminProfile;
this.id = new FormGroup({

name : new FormControl('', [ Validators.required, Validators.pattern(/^[a-z]|[A-Z]$/)]),

// mail : new FormControl('', [ Validators.required, Validators.pattern(/^([a-z]|[A-Z]|[0-9]_\.\-])+\@gmail.com+$/)]),
mail : new FormControl('',[Validators.required,Validators.pattern(/^([a-z]|[A-Z]|[0-9]_\.\-])+\@virtusa.com+$/)]),

pwd: new FormControl('', [ Validators.required, Validators.pattern(/^[a-z]|[A-Z][0-9]$/)]),


mobileno: new FormControl('', [ Validators.required, Validators.pattern(/^[1-9][0-9]{9}$/),Validators.minLength(10)]),

loc : new FormControl('Hyderabad' , Validators.required)

});


}
onSubmit(formData){
  if(formData.valid)
  {
    console.log(formData.value);
    this.af.auth.createUserWithEmailAndPassword(
      formData.value.mail,    
      formData.value.pwd).
    then(
      (success) => {
      console.log(success.user.uid);
      this.data ={
        "email" :formData.value.mail,
        "eventPoints":[],
        "id":'e'+this.mainservice.userId+1,
        "location": formData.value.loc,
        "mobileno":formData.valid.mobileno,
        "role":"admin",
        "skills":formData.value.skill,
        "eid":success.user.uid,
        "name":formData.value.name,
      };
      console.log("data",this.data);
      const url='https://islotproject-3175e.firebaseio.com/Users/.json ';
      this.httpservice.post(url,this.data)
      .subscribe(rsp=>{
        this.user=rsp.json(),
        console.log(rsp.json());
      })
     

      this.registationservice.sendUserDetails(this.data);
      this.router.navigate(['/login'])
    }).catch(
      (err) => {
      console.log(err);
      this.error = err;
    })
  }
}
  

  ngOnInit() {
    if ( this.mainservice.updateAdminProfile) {
      this.id.get('name').disable();
      this.id.get('mail').disable();
    } else {
      this.id.get('name').enable();
      this.id.get('mail').enable();
    }
    this.mainservice.userIdGeneration();
  }

clear(){
  this.id.reset();
}


}