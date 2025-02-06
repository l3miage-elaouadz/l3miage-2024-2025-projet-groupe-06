import { TestBed } from '@angular/core/testing';

import { TournneeService } from './tournnee.service';

describe('TournneeService', () => {
  let service: TournneeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TournneeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
