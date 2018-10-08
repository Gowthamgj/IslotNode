
import { Route } from '@angular/router';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { AdminregistrationComponent } from './pages/adminregistration/adminregistration.component';

import {LoginComponent} from './pages/login/login.component';
import { InterviewerregistrationComponent } from "./pages/interviewerregistration/interviewerregistration.component";

export const route: Route[] = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {

    path: 'interviewerregistration',
    component: InterviewerregistrationComponent,
},
{
    path: 'adminregistration',
    component: AdminregistrationComponent,
  },
    {
      path: '',
      component: LandingpageComponent,

    }
   
];
