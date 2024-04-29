import { TestBed } from '@angular/core/testing';

import { ObtenerIdElectrovalvulaService } from './obtener-id-electrovalvula.service';

describe('ObtenerIdElectrovalvulaService', () => {
  let service: ObtenerIdElectrovalvulaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerIdElectrovalvulaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
