import { TestBed, inject } from '@angular/core/testing';

import { ConductorService1 } from './conductor-service1';

describe('ConductorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConductorService1]
    });
  });

  it('should be created', inject([ConductorService1], (service: ConductorService1) => {
    expect(service).toBeTruthy();
  }));
});
