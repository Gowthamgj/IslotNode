import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewerregistrationComponent } from './interviewerregistration.component';

describe('InterviewerregistrationComponent', () => {
  let component: InterviewerregistrationComponent;
  let fixture: ComponentFixture<InterviewerregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewerregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewerregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
