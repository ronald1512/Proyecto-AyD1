import { TestBed } from '@angular/core/testing';

import { CargamasivaService } from './cargamasiva.service';

describe('CargamasivaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CargamasivaService = TestBed.get(CargamasivaService);
    expect(service).toBeTruthy();
  });
});
