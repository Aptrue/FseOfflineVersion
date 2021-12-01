import { TestBed } from '@angular/core/testing';

import { FseService } from './fse.service';

describe('FseService', () => {
  let service: FseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
