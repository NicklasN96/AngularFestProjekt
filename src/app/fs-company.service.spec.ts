import { TestBed, inject } from '@angular/core/testing';

import { FsCompanyService } from './fs-company.service';

describe('FsCompanyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FsCompanyService]
    });
  });

  it('should be created', inject([FsCompanyService], (service: FsCompanyService) => {
    expect(service).toBeTruthy();
  }));
});
