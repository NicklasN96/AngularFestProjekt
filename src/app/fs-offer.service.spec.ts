import { TestBed, inject } from '@angular/core/testing';

import { FsOfferService } from './fs-offer.service';

describe('FsOfferService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FsOfferService]
    });
  });

  it('should be created', inject([FsOfferService], (service: FsOfferService) => {
    expect(service).toBeTruthy();
  }));
});
