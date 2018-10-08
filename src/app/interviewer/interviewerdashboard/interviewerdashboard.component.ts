import { Component, OnInit } from '@angular/core';
import { RegistrationserviceService } from '../../registration/pages/registrationservice.service';
import { EventService } from '../../admin/event.service';
import { InterviewerService } from '../service/interviewer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interviewerdashboard',
  templateUrl: './interviewerdashboard.component.html',
  styleUrls: ['./interviewerdashboard.component.css']
})
export class InterviewerdashboardComponent implements OnInit {
userDetail;
recentevent;
upcomingevent;
constructor(private interser:InterviewerService,private eventService:EventService,private router:Router ){
this.upcomingevent = this.interser.skillwiseupcomingevent;
console.log(this.upcomingevent)
}

  ngOnInit() {
  }
  eventdetails(eventobj){
    console.log('in interviewer dashboard details');
     this.eventService.currentSelectedEvent=eventobj;
     this.eventService.pageTitle = eventobj.eventName;
     console.log(this.eventService);
     console.log(eventobj);
     this.interser.addCurrentSelectedEvent=eventobj;
     this.router.navigate(['/interviewer/eventenrollment']);
  }

}
