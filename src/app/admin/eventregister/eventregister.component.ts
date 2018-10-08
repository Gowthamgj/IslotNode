import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { CustomValidator } from './customvalidator';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { Http } from '@angular/http';
// import $ = require("jquery");
@Component({
  selector: 'app-eventregister',
  templateUrl: './eventregister.component.html',
  styleUrls: ['./eventregister.component.css']
})
export class EventregisterComponent implements OnInit {
  
  user: any;
  data: { "endTime": any; "startTime": any;  "eventName": any; "eventDate": any;  "skills": any; "location":any[]; };
  currentYear;
  currentMonth;
  currentDate;
  eventregister;
  todaydate;
  optionsModel: number[];
  myOptions: IMultiSelectOption[];
  skills = ['java' , 'angular' , 'react' , 'nodeJS' ];
  location = ['chennai', 'hyderabadh' , 'pune' , 'Bangalore' ];
  constructor(private httpservice:Http) {
   
    // $('.selectpicker').selectpicker();
    const today = new Date();
    this.currentYear = today.getFullYear();
    this.currentMonth = today.getMonth() + 1;
    if ( this.currentMonth < 10) {
      this.currentMonth = '0' + this.currentMonth;
    }
    this.currentDate = today.getDate();
    if ( this.currentDate < 10) {
      this.currentDate = '0' + this.currentDate;
    }
    this.todaydate = this.currentYear + '-' + this.currentMonth + '-' + this.currentDate;
    // console.log(this.todaydate);
    this.eventregister = new FormGroup({
      'eventname' :
      new FormControl('', [Validators.required , Validators.maxLength(15) , Validators.minLength(5)]),
      'eventdate' :
      new FormControl( this.todaydate, CustomValidator.datevalidate ),
      'timecheck': new FormGroup({
      'starttime' : new FormControl('', [Validators.required ]),
      'endtime' : new FormControl('', [Validators.required ]),
      }, CustomValidator.validatedate),
    });
   }
   onSubmit(formData){
    if(formData.valid)
    {
      console.log(formData.value);               
        this.data ={
         "eventName":formData.value.eventname,
          "endTime":formData.value.endtime,
          "startTime":formData.value.starttime,
          "eventDate":formData.value.eventdate,
          "location":formData.value.location,
          "skills":formData.value.skills,
        };
        console.log("data",this.data);
        const url='https://islotproject-3175e.firebaseio.com/Events/.json ';
        this.httpservice.post(url,this.data)
        .subscribe(rsp=>{
          this.user=rsp.json(),
          console.log(rsp.json());
        })
       
  
       
      
    }
  }
    

  ngOnInit() {
    this.myOptions = [
      { id: 1, name: 'Option 1' },
      { id: 2, name: 'Option 2' },
  ];
  }
  get eventname() {
    return this.eventregister.get('eventname');
  }
  get eventdate() {
    return this.eventregister.get('eventdate');
  }
  get timecheck() {
    return this.eventregister.get('timecheck');
  }
  get starttime() {
    return this.timecheck.get('starttime');
  }
  get endtime() {
    return this.timecheck.get('endtime');
  }
  checkform() {
    console.log(this.eventregister);
  }
}
