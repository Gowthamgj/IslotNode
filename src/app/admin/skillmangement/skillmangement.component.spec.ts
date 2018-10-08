import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillmangementComponent } from './skillmangement.component';

describe('SkillmangementComponent', () => {
  let component: SkillmangementComponent;
  let fixture: ComponentFixture<SkillmangementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillmangementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillmangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
