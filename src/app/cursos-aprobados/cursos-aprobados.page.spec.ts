import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, ToastController } from '@ionic/angular';

import { CursosAprobadosPage } from './cursos-aprobados.page';

let cursosAprobados = null;

describe('CursosAprobadosPage', () => {

  beforeAll(() => {
    cursosAprobados = new CursosAprobadosPage(new ToastController());
  });

  it('deberia ser falso', () => {
    expect(cursosAprobados.codigoCursoValido('1234')).toBeFalsy()
  })

  it('deberia ser verdadero', () => {
    expect(cursosAprobados.codigoCursoValido('1234')).toBeTruthy()
  })

});
