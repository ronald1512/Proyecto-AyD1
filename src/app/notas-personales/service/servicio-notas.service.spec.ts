import { TestBed } from '@angular/core/testing';

import { ServicioNotasService } from './servicio-notas.service';

describe('ServicioNotasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioNotasService = TestBed.get(ServicioNotasService);
    expect(service).toBeTruthy();
  });
});
