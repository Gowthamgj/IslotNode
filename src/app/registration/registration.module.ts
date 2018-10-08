import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { RouterModule } from '@angular/router';
import {route} from './routes';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InterviewerregistrationComponent } from './pages/interviewerregistration/interviewerregistration.component';
import { AdminregistrationComponent } from "./pages/adminregistration/adminregistration.component";
import {AngularFireModule} from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { RegistrationserviceService } from './pages/registrationservice.service';

export const firebaseConfig={
  
  apiKey: "AIzaSyDqvNVUcNoBOJig3zvtM5F5RQY-ZMihalE",
  authDomain: "islotproject-3175e.firebaseapp.com",
  databaseURL: "https://islotproject-3175e.firebaseio.com",
  projectId: "islotproject-3175e",
  storageBucket: "islotproject-3175e.appspot.com",
  messagingSenderId: "96121341517"
 }

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(route),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [LandingpageComponent, LoginComponent, InterviewerregistrationComponent,AdminregistrationComponent],
 providers:[AngularFireAuth,RegistrationserviceService]
})
export class RegistrationModule { }
