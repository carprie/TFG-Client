import { TestBed } from '@angular/core/testing';

import { ChangeSliderService } from './change-slider.service';

describe('ChangeSliderService', () => {
  let service: ChangeSliderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeSliderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
