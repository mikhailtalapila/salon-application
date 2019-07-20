import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailySchedulerComponent } from './daily-scheduler.component';

describe('DailySchedulerComponent', () => {
  let component: DailySchedulerComponent;
  let fixture: ComponentFixture<DailySchedulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailySchedulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailySchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
