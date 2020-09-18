import { TestBed } from '@angular/core/testing';
import { CursosPendientesService } from './cursos-pendientes.service';
import { Curso } from '../../cargamasiva/curso.interface'

describe('CursosPendientesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));


  let arregloCursos: Curso[] = [];

  let curso: Curso = {
    codigo: "",
    nombre: "",
    cursospre: [],
    creditos: "",
    creditospre: ""
  };

  it('should be created', () => {
    const service: CursosPendientesService = TestBed.get(CursosPendientesService);
    expect(service).toBeTruthy();
  });

  let componente: CursosPendientesService;



  it('Algoritmo de comparación de cursos', () => {

    curso.codigo = '0011';
    curso.creditos = '2';
    curso.cursospre.push('0009')
    curso.nombre = 'Idioma Técnico 4';
    arregloCursos.push(curso)

    curso.codigo = '770';
    curso.creditos = '4';
    curso.cursospre.push('103')
    curso.nombre = 'Introducción a la Programación y Computación 1';
    curso.creditospre = '33';
    arregloCursos.push(curso)


    let retorno2 = ['0011']

    expect(componente.comparacionCursos(arregloCursos, retorno2).length).toEqual(1);
  }
    )

  it('Metodo de obtención de cursos del área de sistemas', () => {
    componente.obtenerCursos().subscribe(res=>{
      expect(res.length).toBe(62)
    })
  });

  it('Metodo de obtención de cursos aprobados', () => {
    componente.obtenerCursosAprobados().subscribe(res=>{
      let array2=[];
      array2.push(res[0].payload.doc.data());
      expect(array2[0].cursosAprobados.length).toBe(5)
    })
  });






  /*it('Validar código del curso correcto', () => {
    expect(service.verificarCodigoCurso(12234)).toBeTruthy();
  });

  it('Validar código del curso incorrecto', () => {
    expect(service.verificarCodigoCurso('adasda')).toBeFalsy();
  });*/

});
