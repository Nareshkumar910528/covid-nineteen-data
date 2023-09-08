import { TestBed } from '@angular/core/testing';

import { OverallDataResolver } from './overall-data.resolver';

describe('OverallDataResolver', () => {
  let resolver: OverallDataResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(OverallDataResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
