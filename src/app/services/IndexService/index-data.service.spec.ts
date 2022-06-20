import { TestBed } from '@angular/core/testing';

import { IndexDataService } from './index-data.service';

describe('IndexDataService', () => {
  let service: IndexDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndexDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
