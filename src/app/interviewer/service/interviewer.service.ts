import { element } from 'protractor';
import { Injectable } from '@angular/core';
import { RegistrationserviceService } from '../../registration/pages/registrationservice.service';
import { EventService } from '../../admin/event.service';
import { Http } from '@angular/http';

@Injectable()
export class InterviewerService {
  userDetail;
  totalupcomingevent;
  skillwiseupcomingevent;
  particularevent;
  url = 'https://islotproject-3175e.firebaseio.com/Events.json';
  data;
  pageTitle;
  today = new Date();
  userKey;
  
  dd = this.today.getDate();
  mm = this.today.getMonth() + 1; // since January is 0!
  yyyy = this.today.getFullYear();
  upcomingevent;
  recentevent;
  edate;
  day;
  eventIdWithName;
constructor(private http:Http,private regser:RegistrationserviceService , private eventser : EventService){
  this.eventIdWithName = {};
  for(let key in this.regser.userdata){
    this.userKey = key;
    this.userDetail = this.regser.userdata[key];
  }
  
  // this.userDetail = this.regser.userdata[0];
  console.log("interviewer",this.userDetail);
  this.skillwiseupcomingevent=[];
  this.fetchData();
  //.totalupcomingevent = this.eventser.futureEvent;
console.log(this.upcomingevent)
 }
 set addCurrentSelectedEvent(selectedEvent) {
  this.particularevent = selectedEvent;
}

get currentSelectedEvent() {
  return this.particularevent;
}
 fetchData() {
  this.upcomingevent = [];
  this.recentevent = [];
  this.http.get(this.url)
    .subscribe(rsp => {
      console.log(rsp.json());
      this.data = rsp.json();
      for (let key in this.data) {
        
        this.edate = this.data[key]['eventDate'];
        this.day = this.edate ? this.edate.split('/') : '';
        // this.eventIdWithName = {
        //   this.data[key] :  key,
        // }
        this.eventIdWithName[this.data[key].id]=key
        if (parseInt(this.day[2]) > this.yyyy) {
          this.upcomingevent.push(this.data[key]);
        }
        else if ((parseInt(this.day[2]) == this.yyyy)) {
          if (parseInt(this.day[0]) == this.mm) {
            if (parseInt(this.day[1]) > this.dd) {
              this.upcomingevent.push(this.data[key]);
            }
            else {
              this.recentevent.push(this.data[key]);
            }
          }
          else if (parseInt(this.day[0]) > this.mm) {
            this.upcomingevent.push(this.data[key]);
          }
          else {
            this.recentevent.push(this.data[key]);
          }
        }
        else{
          this.recentevent.push(this.data[key]);
        }
      }
      // console.log(this.upcomingevent);
      // console.log(this.recentevent);
      this.findCorrespondingRecent();
    });
}
  findCorrespondingRecent(){
    this.upcomingevent.forEach(element => {
      console.log(element.skill,this.userDetail.skills);
    if(this.userDetail.skills.indexOf(element.skill) >=0 ){
      this.skillwiseupcomingevent.push(element);
    }
  });
  console.log("skillwise",this.skillwiseupcomingevent)
  
  }
  addInterviewerCount(eventKey,slotid,userDetail){
    let eventdata;
      this.http.get('https://islotproject-3175e.firebaseio.com/Events/'+eventKey+'.json')
      .subscribe((res)=>{
        eventdata = res.json();
        //console.log(eventdata);
        eventdata.slots.forEach((element)=>{
          if(element.id==slotid){
            element.noOfInterviewersEnrolled.push({'userid':userDetail.id});
          }
        })
        console.log(eventdata.id);
        this.interviewerPatch(eventKey,slotid,userDetail,eventdata);
      })
  }
  interviewerPatch(eventKey,slotid,userDetail,eventdata){
    this.http.patch('https://islotproject-3175e.firebaseio.com/Events/'+eventKey+'.json',eventdata)
    .subscribe((res)=>{
      console.log(res);
      // this.eventser.currentSelectedEvent=eventdata;
    })
  }
  addUserData(eventKey,slotId,userDetail,userKey){
    let userFetchedData;
    this.http.get('https://islotproject-3175e.firebaseio.com/Users/'+userKey+'.json')
    .subscribe((res) => {
      userFetchedData = res.json();
      console.log(userFetchedData.eventPoints)
      userFetchedData.eventPoints[{
        "eventDate": this.currentSelectedEvent.startdate,
        "eventId": this.currentSelectedEvent.id,
        "id":slotId,
        "noOfInterviewsTaken":'0',
        "points":'0'
      }]
      this.http.patch('https://islotproject-3175e.firebaseio.com/Users/'+userKey+'.json',userFetchedData)
      .subscribe((r)=>{
        console.log(r.json())
      })
    })
  }
}
