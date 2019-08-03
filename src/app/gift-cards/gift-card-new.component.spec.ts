import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftCardNewComponent } from './gift-card-new.component';

describe('GiftCardNewComponent', () => {
  let component: GiftCardNewComponent;
  let fixture: ComponentFixture<GiftCardNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftCardNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftCardNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
