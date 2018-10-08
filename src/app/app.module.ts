import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routes} from './app.routes';
import { AppComponent } from './app.component';
import { RegistrationModule } from './registration/registration.module';
import { LandingpageComponent } from './registration/pages/landingpage/landingpage.component';
import { RouterModule , Routes} from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';
import { EventService } from './admin/event.service';
import { HttpModule } from '@angular/http';
import { InterviewerregistrationComponent } from './pages/landingpage/interviewerregistration/interviewerregistration.component';
import { MainserviceService } from './commonservice/mainservice.service';
// import { RegistrationserviceService } from './registration/pages/registrationservice.service';


@NgModule({
  declarations: [
    AppComponent,
    InterviewerregistrationComponent,
  ],
  imports: [
    BrowserModule,
    RegistrationModule,
    ReactiveFormsModule,
    FormsModule,
    AdminModule,
    HttpModule,
    RouterModule.forRoot( routes )
  ],
  providers: [
    // EventService
    MainserviceService,
    // RegistrationserviceService
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
