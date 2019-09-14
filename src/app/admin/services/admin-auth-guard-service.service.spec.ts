import { TestBed } from '@angular/core/testing';

import { AdminAuthGuardServiceService } from './admin-auth-guard-service.service';

describe('AdminAuthGuardServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminAuthGuardServiceService = TestBed.get(AdminAuthGuardServiceService);
    expect(service).toBeTruthy();
  });
});
