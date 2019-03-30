import { TestBed } from '@angular/core/testing';

import { SharedSettingsService } from './shared-settings.service';

describe('SharedSettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharedSettingsService = TestBed.get(SharedSettingsService);
    expect(service).toBeTruthy();
  });
});
