import { TestBed } from '@angular/core/testing';
import { CursosPendientesService } from './cursos-pendientes.service';

describe('CursosPendientesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CursosPendientesService = TestBed.get(CursosPendientesService);
    expect(service).toBeTruthy();
  });

  let componente:CursosPendientesService;

  it('Metodo de lectura de archivo', () => {
    expect(componente.lecturaArchivo()).toBe("")
  });

  it('Algoritmo de comparación de cursos', () => {
    let retorno1=componente.lecturaArchivo()
    let retorno2=componente.obtenerCursosAprobados()
    expect(componente.comparacionCursos(retorno1,retorno2)).toEqual(3);
  });

  it('Metodo de obtención de cursos aprobados', () => {
    expect(componente.obtenerCursosAprobados()).toBe("")
  });

});
