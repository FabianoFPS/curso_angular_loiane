import { TestBed } from '@angular/core/testing';

import { GuardaRotasGuard } from './guarda-rotas.guard';

describe('GuardaRotasGuard', () => {
  let guard: GuardaRotasGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardaRotasGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
