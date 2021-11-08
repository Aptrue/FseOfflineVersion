import { TestBed } from '@angular/core/testing';

import { LocalDatabaseServiceService } from './local-database-service.service';

describe('LocalDatabaseServiceService', () => {
  let service: LocalDatabaseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalDatabaseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
