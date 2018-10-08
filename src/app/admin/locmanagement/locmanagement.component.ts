import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { FormControl, AbstractControl , ValidationErrors, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-locmanagement',
  templateUrl: './locmanagement.component.html',
  styleUrls: ['./locmanagement.component.css']
})
export class LocmanagementComponent implements OnInit {
    locationList;
    locationBox;
    locationValid;
    invalid;
  constructor(public location: LocationService) {
    this.locationList = [];
    this.location.fetchAdmin();
    this.locationList = this.location.location;
    this.locationValid  = new FormGroup({
      'box' : new FormControl('', this.checkForExisting),
    });
  }

  ngOnInit() {
  }
  onEnter() {
    console.log(this.locationBox);
    console.log(this.locationList.indexOf(this.locationBox) )
    if ( this.locationList.indexOf(this.locationBox) >= 0) {
      this.invalid = true;
    } else {
      this.invalid = false;
      this.location.updateLocation(this.locationBox);
      //this.locationList = [];
      this.location.fetchAdmin();
    this.locationList = this.location.location;
      }
    this.locationBox = '';
  }
  checkForExisting(control: AbstractControl): ValidationErrors | null {
    return null;
  }
  deleteLocation(loc) {
    this.location.deleteLoc(loc);
  }
}
