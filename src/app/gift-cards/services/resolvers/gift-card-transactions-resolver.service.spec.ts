import { TestBed } from '@angular/core/testing';

import { GiftCardTransactionsResolverService } from './gift-card-transactions-resolver.service';

describe('GiftCardTransactionsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GiftCardTransactionsResolverService = TestBed.get(GiftCardTransactionsResolverService);
    expect(service).toBeTruthy();
  });
});
