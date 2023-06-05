import { TestBed } from '@angular/core/testing';

import { NssfService } from './nssf.service';

describe('NssfService', () => {
  let service: NssfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NssfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
