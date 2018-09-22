import { TestBed, async, inject } from '@angular/core/testing';

import { ClientAuthGuard } from './client-auth.guard';

describe('ClientAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientAuthGuard]
    });
  });

  it('should ...', inject([ClientAuthGuard], (guard: ClientAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
