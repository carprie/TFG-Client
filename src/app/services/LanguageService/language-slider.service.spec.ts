import { TestBed } from '@angular/core/testing';

import { LanguageSliderService } from './language-slider.service';

describe('ChangeSliderService', () => {
  let service: LanguageSliderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageSliderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
