import { InterviewerdashboardComponent } from './interviewerdashboard/interviewerdashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventenrollmentComponent } from './eventenrollment/eventenrollment.component';
import { RouterModule } from '@angular/router';
import {route} from './routes';
import { InterviewerService } from './service/interviewer.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  providers: [InterviewerService],
  declarations: [EventenrollmentComponent,InterviewerdashboardComponent]
})
export class InterviewerModule { }
