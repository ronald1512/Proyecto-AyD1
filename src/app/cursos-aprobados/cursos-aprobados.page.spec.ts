import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CursosAprobadosPage } from './cursos-aprobados.page';

let cursosAprobados = null;

describe('CursosAprobadosPage', () => {

  beforeAll(() => {
    cursosAprobados = new CursosAprobadosPage();
  });

  it('deberia ser falso', () => {
    expect(cursosAprobados.validarCodigoCurso('1234')).toBeFalsy()
  })

  it('deberia ser verdadero', () => {
    expect(cursosAprobados.validarCodigoCurso('1234')).toBeTruthy()
  })

});
