import { TestBed } from '@angular/core/testing';

import { GiftCardsAllTransactionsResolverService } from './gift-cards-all-transactions-resolver.service';

describe('GiftCardsTransactionsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GiftCardsAllTransactionsResolverService = TestBed.get(GiftCardsAllTransactionsResolverService);
    expect(service).toBeTruthy();
  });
});
