import { TestBed } from '@angular/core/testing';

import { AtlasGuard } from './atlas.guard';

describe('AtlasGuard', () => {
  let guard: AtlasGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AtlasGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
