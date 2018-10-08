import { EventService } from './../event.service';
// import { AdmindashboardComponent } from './../admindashboard/admindashboard.component';
import { Component, OnInit  , Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-viewevent',
  templateUrl: './viewevent.component.html',
  styleUrls: ['./viewevent.component.css']
})
export class VieweventComponent implements OnInit {
  particulardata;
  slotdata;
  @Input() user;
  constructor(public service: EventService) {
    this.particulardata = this.service.currentSelectedEvent;
    this.slotdata = this.particulardata.slots;
    console.log(this.slotdata);
   }

  ngOnInit() {
    // this.route.params.subscribe((params)=>{
    //   console.log(params);
    // });
  }

}
