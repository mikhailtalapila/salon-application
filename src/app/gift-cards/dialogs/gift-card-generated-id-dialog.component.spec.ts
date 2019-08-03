import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftCardGeneratedIdDialogComponent } from './gift-card-generated-id-dialog.component';

describe('GiftCardGeneratedIdDialogComponent', () => {
  let component: GiftCardGeneratedIdDialogComponent;
  let fixture: ComponentFixture<GiftCardGeneratedIdDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftCardGeneratedIdDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftCardGeneratedIdDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
