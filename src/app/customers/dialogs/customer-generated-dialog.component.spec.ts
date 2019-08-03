import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerGeneratedDialogComponent } from './customer-generated-dialog.component';

describe('CustomerGeneratedDialogComponent', () => {
  let component: CustomerGeneratedDialogComponent;
  let fixture: ComponentFixture<CustomerGeneratedDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerGeneratedDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerGeneratedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
