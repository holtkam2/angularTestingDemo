import { TestBed, inject } from '@angular/core/testing';

import { Child1Service } from './child1.service';

describe('Child1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Child1Service]
    });
  });

  it('should ...', inject([Child1Service], (service: Child1Service) => {
    expect(service).toBeTruthy();
  }));
});
