import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventregisterComponent } from './eventregister/eventregister.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { route } from '../admin/routeevent';

import { SkillmangementComponent } from './skillmangement/skillmangement.component';

import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { EventService } from './event.service';
import { EventdetailheaderComponent } from './eventdetailheader/eventdetailheader.component';

import { VieweventComponent } from './viewevent/viewevent.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { LocmanagementComponent } from './locmanagement/locmanagement.component';
import { UpdateeventComponent } from './updateevent/updateevent.component';
import { LocationService } from './location.service';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(route)
  ],

  providers: [EventService, LocationService],
  declarations :
  [EventregisterComponent,
    AdmindashboardComponent,
    SkillmangementComponent,
     EventdetailheaderComponent,
      UpdateeventComponent,
       VieweventComponent,
        AdminHomeComponent,
        LocmanagementComponent
  ]

})
export class AdminModule { }
