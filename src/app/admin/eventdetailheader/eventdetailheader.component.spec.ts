import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventdetailheaderComponent } from './eventdetailheader.component';

describe('EventdetailheaderComponent', () => {
  let component: EventdetailheaderComponent;
  let fixture: ComponentFixture<EventdetailheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventdetailheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventdetailheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
