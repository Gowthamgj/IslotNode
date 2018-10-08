import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocmanagementComponent } from './locmanagement.component';

describe('LocmanagementComponent', () => {
  let component: LocmanagementComponent;
  let fixture: ComponentFixture<LocmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
