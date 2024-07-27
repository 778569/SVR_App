import { TestBed } from '@angular/core/testing';

import { SvrServiceService } from './svr-service.service';

describe('SvrServiceService', () => {
  let service: SvrServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvrServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
