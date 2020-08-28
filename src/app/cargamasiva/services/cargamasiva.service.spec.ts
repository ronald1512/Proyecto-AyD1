import { TestBed } from '@angular/core/testing';

import { CargamasivaService } from './cargamasiva.service';

/*describe('CargamasivaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CargamasivaService = TestBed.get(CargamasivaService);
    expect(service).toBeTruthy();
  });
});*/

let cargaMasiva = null;

describe("Carga Masiva Service", () => {
  beforeEach(() => {
    cargaMasiva = new CargamasivaService(null);
  })


  it("cargaMasiva.getCursos() deberia estar undefined", () => {
    expect(typeof cargaMasiva.getCursos()).toBe("undefined");
  });

  it("cargaMasiva.getCollection() deberia estar undefined", () => {
    expect(typeof cargaMasiva.getCollection()).toBe("undefined");
  });

});