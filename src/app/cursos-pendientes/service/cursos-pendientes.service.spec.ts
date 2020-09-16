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
    expect(componente.lecturaArchivo()).toBeFalsy("")
  });

  it('Algoritmo de comparación de cursos', () => {
    let retorno1=componente.lecturaArchivo()
    componente.obtenerCursosAprobados().subscribe(retorno2=>{
      expect(componente.comparacionCursos(retorno1,retorno2)).toEqual(3);
    })
    
  });

  it('Metodo de obtención de cursos aprobados', () => {
    expect(componente.obtenerCursosAprobados()).toBe("")
  });

  /*it('Validar código del curso correcto', () => {
    expect(service.verificarCodigoCurso(12234)).toBeTruthy();
  });

  it('Validar código del curso incorrecto', () => {
    expect(service.verificarCodigoCurso('adasda')).toBeFalsy();
  });*/

});
