import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,AbstractControl,ValidationErrors} from '@angular/forms';
import {Http} from '@angular/http';
import {AngularFireAuth} from 'angularfire2/auth';
import { Router } from '@angular/router';
import { RegistrationserviceService } from '../registrationservice.service';

@Component({
  selector: 'app-interviewerregistration',
  templateUrl: './interviewerregistration.component.html',
  styleUrls: ['./interviewerregistration.component.css']
})
export class InterviewerregistrationComponent implements OnInit {


  mainservice: any;
  user: any;
  data: any;
  error: any;
  id:FormGroup;
  list =[
'Angular',
  'Java Script',
  'React',
'.Net'];

  constructor( public af: AngularFireAuth,public registationservice: RegistrationserviceService,private router: Router, private httpservice:Http,) { 
   
    this.id=new FormGroup({
      name : new FormControl('',[Validators.required,Validators.pattern(/^[a-z]|[A-Z]$/)]),
      
      mail : new FormControl('',[Validators.required,Validators.pattern(/^([a-z]|[A-Z]|[0-9]_\.\-])+\@virtusa.com+$/)]),
      
      mobileno: new FormControl('',[Validators.required,Validators.pattern(/^[1-9][0-9]{9}$/),Validators.minLength(10)]),
      
      pwd: new FormControl('',[Validators.required,Validators.pattern(/[a-z]|[A-Z][0-9]/)]),
      
      skill : new FormControl('',Validators.required)
    
      })
      
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
      console.log("userid"+success.user.uid);
      this.data ={
        "email" :formData.value.mail,
        "eventPoints":[],     
        "location": formData.value.location,
        "role":"Interviewers",
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
  }
  clear(){
    this.id.reset();
  }
  
  
}
