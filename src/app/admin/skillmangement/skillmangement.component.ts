import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skillmangement',
  templateUrl: './skillmangement.component.html',
  styleUrls: ['./skillmangement.component.css']
})
export class SkillmangementComponent implements OnInit {
    courses = ['Javascript', 'Angular', '.Net', 'Java', 'Informatics', 'Testing'];
  constructor() { }

  ngOnInit() {
  }

}
