import { TestBed } from '@angular/core/testing';

import { PlanetsFilterService } from './planets-filter.service';

describe('PlanetsFilterService', () => {
  let service: PlanetsFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanetsFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
