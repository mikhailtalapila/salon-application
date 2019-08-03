import { TestBed } from '@angular/core/testing';

import { CustomersResolverService } from './customers-resolver.service';

describe('CustomersResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomersResolverService = TestBed.get(CustomersResolverService);
    expect(service).toBeTruthy();
  });
});
