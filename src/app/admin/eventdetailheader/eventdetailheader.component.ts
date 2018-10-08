import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-eventdetailheader',
  templateUrl: './eventdetailheader.component.html',
  styleUrls: ['./eventdetailheader.component.css']
})
export class EventdetailheaderComponent implements OnInit {
  particulardata;
  constructor(public service: EventService) {
    this.particulardata = this.service.currentSelectedEvent;
   }
  ngOnInit() {
  }

}
