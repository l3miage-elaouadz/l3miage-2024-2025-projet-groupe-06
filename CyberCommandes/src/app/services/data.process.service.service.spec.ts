import { TestBed } from '@angular/core/testing';

import { DataProcessServiceService } from './data.process.service.service';

describe('DataProcessServiceService', () => {
  let service: DataProcessServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataProcessServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
