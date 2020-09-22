import { TestBed } from '@angular/core/testing';

import { CursosPendientesService } from './cursos-pendientes.service';

describe('CursosPendientesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CursosPendientesService = TestBed.get(CursosPendientesService);
    expect(service).toBeTruthy();
  });

  it('Algoritmo para obtener los cursos del estudiante', () => {
    const service: CursosPendientesService = TestBed.get(CursosPendientesService);
    expect(service).toBeTruthy();
  });


  it('Algoritmo para obtener los cursos que se pueden llevar', () => {
    const service: CursosPendientesService = TestBed.get(CursosPendientesService);
    expect(service).toBeTruthy();
  });

  
  it('Algoritmo para ingresar un nuevo cursos al horario', () => {
    const service: CursosPendientesService = TestBed.get(CursosPendientesService);
    expect(service).toBeTruthy();
  });
  
});
