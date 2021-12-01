import { TestBed } from '@angular/core/testing';

import { CriancasService } from './criancas.service';

describe('CriancasService', () => {
  let service: CriancasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriancasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
