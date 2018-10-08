import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { InterviewerService } from '../service/interviewer.service';

@Component({
  selector: 'app-eventenrollment',
  templateUrl: './eventenrollment.component.html',
  styleUrls: ['./eventenrollment.component.css']
})
export class EventenrollmentComponent implements OnInit {
  particularEvent;
  slotDetails;
  userDetail;
  userKey;
  eventKey;
  constructor( private interviewerservice : InterviewerService) { 
    this.particularEvent = this.interviewerservice.currentSelectedEvent;
    this.slotDetails =this.particularEvent.slots;
    this.userDetail = this.interviewerservice.userDetail;
    this.userKey = this.interviewerservice.userKey
    console.log(this.userKey);
    this.eventKey = this.interviewerservice.eventIdWithName[this.particularEvent.id];
    console.log("event key", this.eventKey);
    console.log("user detail",this.userDetail)
    console.log("particular event obj",this.slotDetails);
    console.log("uer key",this.userKey);
  }

  ngOnInit() {
   
  }
  toggle(eve,slotid) {
    if(eve.target.checked){
      this.interviewerservice.addInterviewerCount(this.eventKey,slotid,this.userDetail);
      this.interviewerservice.addUserData(this.eventKey,slotid,this.userDetail,this.userKey);
      this.slotDetails.forEach(element => {
        if(element.id == slotid){
          element.noOfInterviewersEnrolled.push({});
        }
      });
    }
    else{

    }
  }
}
