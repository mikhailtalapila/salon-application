import { TestBed } from '@angular/core/testing';

import { GiftCardTransactionsByGiftCardResolverService } from './gift-card-transactions-by-gift-card-resolver.service';

describe('GiftCardTransactionsByGiftCardResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GiftCardTransactionsByGiftCardResolverService = TestBed.get(GiftCardTransactionsByGiftCardResolverService);
    expect(service).toBeTruthy();
  });
});
