import { TestBed, inject } from '@angular/core/testing';

import { AuthCompanyService } from './auth-company.service';

describe('AuthCompanyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthCompanyService]
    });
  });

  it('should be created', inject([AuthCompanyService], (service: AuthCompanyService) => {
  }));
});
