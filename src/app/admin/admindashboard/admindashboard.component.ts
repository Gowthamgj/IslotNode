import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';
import { MainserviceService } from '../../commonservice/mainservice.service';
import * as _ from "lodash";

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent {
  event;
  recentevents;
  recentcontent;
  upcomingevents;
  sortedArray;
  title;
  dropdown;
 today = new Date();
 dd= this.today.getDate();
 mm = this.today.getMonth() + 1; // since January is 0!
 yyyy = this.today.getFullYear();
constructor(public eventService: EventService, private router: Router , private mainservice:MainserviceService) {
  this.recentcontent=[];
  this.dropdown = false;
  // this.eventService.fetchData();
  this.recentevents=[]
  this.upcomingevents=[]
  this.title=this.eventService.pageTitle;
  this.event=this.eventService.data;
  // console.log('recent',this.recentevents);
  this.eventService.pageTitle = 'Admin Home'
  // this.recentevents.sort(function(a,b){
  //   return (new Date(a.eventDate).getTime())-(new Date(b.eventDate).getTime());
  // }) 

  //this.sortedArray=_.orderBy(this.eventService.recentevent,['eventDate'],['asc']);
 console.log("sorted array",this.sortedArray);
  // console.log(this.recentevents)
  // this.splitevents();
}

ngOnInit() {
  this.eventService.fetchData();
  this.recentevents = this.eventService.recentevent;
  this.upcomingevents=this.eventService.upcomingevent;
}
public get eventser(){
  return this.eventService;
}
updateProfile(){
this.mainservice.updateAdminProfile = true;
}
details(eventobj){
  console.log('in admin dashboard details');
   this.eventService.currentSelectedEvent=eventobj;
   this.eventService.pageTitle = eventobj.eventName;
   console.log(this.eventService);
   console.log(eventobj);
   this.router.navigate(['/admin/eventdetails']);
}
toggle()  {
  console.log(this.dropdown);
  this.dropdown = !this.dropdown;
}

}
