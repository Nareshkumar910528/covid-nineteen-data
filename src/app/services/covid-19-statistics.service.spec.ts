import { TestBed } from '@angular/core/testing';

import { Covid19StatisticsService } from './covid-19-statistics.service';

describe('Covid19StatisticsService', () => {
  let service: Covid19StatisticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Covid19StatisticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
