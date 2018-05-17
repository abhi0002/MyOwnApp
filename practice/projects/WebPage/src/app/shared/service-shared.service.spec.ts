import { TestBed, inject } from '@angular/core/testing';

import { ServiceSharedService } from './service-shared.service';

describe('ServiceSharedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceSharedService]
    });
  });

  it('should be created', inject([ServiceSharedService], (service: ServiceSharedService) => {
    expect(service).toBeTruthy();
  }));
});
