import { TestBed } from '@angular/core/testing';

import { ObtenerLogRiegoService } from './obtener-log-riego.service';

describe('ObtenerLogRiegoService', () => {
  let service: ObtenerLogRiegoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerLogRiegoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
