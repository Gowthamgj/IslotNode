import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventenrollmentComponent } from './eventenrollment.component';

describe('EventenrollmentComponent', () => {
  let component: EventenrollmentComponent;
  let fixture: ComponentFixture<EventenrollmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventenrollmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventenrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
