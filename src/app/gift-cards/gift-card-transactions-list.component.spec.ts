import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftCardTransactionsListComponent } from './gift-card-transactions-list.component';

describe('GiftCardTransactionsListComponent', () => {
  let component: GiftCardTransactionsListComponent;
  let fixture: ComponentFixture<GiftCardTransactionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftCardTransactionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftCardTransactionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
