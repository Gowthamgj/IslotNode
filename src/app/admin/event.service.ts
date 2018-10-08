import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as _ from 'lodash';

@Injectable()
export class EventService {
  url = 'https://islotproject-3175e.firebaseio.com/Events.json';
  data;
  pageTitle;
  today = new Date();
  dd = this.today.getDate();
  mm = this.today.getMonth() + 1; // since January is 0!
  yyyy = this.today.getFullYear();
  upcomingevent;
  recentevent;
  sortedArray;
  recentsorted;
  edate;
  day;
  private particulareventdata;
  constructor(private httpservice: Http) {
    this.pageTitle = 'Admin Home';
    this.upcomingevent = [];
    this.recentevent = [];
  }

  set currentSelectedEvent(selectedEvent) {
    this.particulareventdata = selectedEvent;
  }

  get currentSelectedEvent() {
    return this.particulareventdata;
  }
  get futureEvent() {
    return this.upcomingevent;
  }
  fetchData() {
    this.upcomingevent = [];
    this.recentevent = [];
    this.httpservice.get(this.url)
      .subscribe(rsp => {
        console.log(rsp.json());
        this.data = rsp.json();
        for (var key in this.data) {
          this.edate = this.data[key]['eventDate'];
          this.day = this.edate ? this.edate.split('/') : '';
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
          else {
            this.recentevent.push(this.data[key]);
          }
        }
        console.log(this.upcomingevent);
        console.log(this.recentevent);
              this.upcomingevent.push(this.data[key]);
        console.log("sortedarr",_.orderBy(this.upcomingevent,['eventDate'],['asc']));
        // this.sortedArray=_.orderBy(this.upcomingevent,[new Date[eventDate],['asc']);
        // console.log("sorted",this.sortedArray);
        // this.recentsorted=_.orderBy(this.upcomingevent,function(a){
        //   console.log( new Date(a['eventDate']));
        //   return new Date() < new Date(a['eventDate']);
        // })
        // console.log(this.recentsorted);
      });

  }
  
}
