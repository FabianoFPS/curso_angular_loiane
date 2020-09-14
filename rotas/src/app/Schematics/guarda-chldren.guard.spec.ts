import { TestBed } from '@angular/core/testing';

import { GuardaChldrenGuard } from './guarda-chldren.guard';

describe('GuardaChldrenGuard', () => {
  let guard: GuardaChldrenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardaChldrenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
