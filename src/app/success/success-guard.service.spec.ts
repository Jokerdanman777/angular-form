import { TestBed, inject } from '@angular/core/testing';

import { SuccessGuardService } from './success-guard.service';

describe('SuccessGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuccessGuardService]
    });
  });

  it('should be created', inject([SuccessGuardService], (service: SuccessGuardService) => {
    expect(service).toBeTruthy();
  }));
});
