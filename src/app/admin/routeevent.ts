import { Component } from '@angular/core';

import { Route } from '@angular/router';
import { EventregisterComponent } from './eventregister/eventregister.component';

import { SkillmangementComponent } from './skillmangement/skillmangement.component';

import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { EventdetailheaderComponent } from './eventdetailheader/eventdetailheader.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { LocmanagementComponent } from './locmanagement/locmanagement.component';


export const route: Route[] = [
  {
    path: '',
    component: AdminHomeComponent,
    children: [
      {
        path: 'dashboard',
        component: AdmindashboardComponent,
      },
      {
        path: 'skillmanagement',
        component: SkillmangementComponent
      },
      {
        path: 'locmanagement',
        component: LocmanagementComponent
      },
      {
        path: 'eventdetails',
        component: EventdetailheaderComponent
      },
     
      {
        path: 'createevent',
        component: EventregisterComponent,
      }
    ]
  }
];
