import { TestBed } from '@angular/core/testing';

import { CursosAprobadosService } from './cursos-aprobados.service';

describe('CursosAprobadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CursosAprobadosService = TestBed.get(CursosAprobadosService);
    expect(service).toBeTruthy();
  });
});
