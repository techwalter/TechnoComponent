import { TestBed } from '@angular/core/testing';

import { TechnoLibService } from './techno-lib.service';

describe('TechnoLibService', () => {
  let service: TechnoLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnoLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
