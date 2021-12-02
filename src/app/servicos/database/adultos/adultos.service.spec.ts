import { TestBed } from '@angular/core/testing';

import { AdultosService } from './adultos.service';

describe('AdultosService', () => {
  let service: AdultosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdultosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
