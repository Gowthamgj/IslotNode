import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  title;
  dropdown;
  constructor(private service: EventService) {
    this.title = this.service.pageTitle;
    this.dropdown =  true;
  }
  toggle()  {
    console.log(this.dropdown);
    this.dropdown = !this.dropdown;
  }
  ngOnInit() {
  }

}
