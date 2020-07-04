import { TestBed } from '@angular/core/testing';

import { TimeConverterService } from './time-converter.service';

describe('DateConverterService', () => {
  let service: TimeConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
