import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CargaCursosAprobadosPage } from './carga-cursos-aprobados.page';

describe("Prueba de separación de csv", () => {
  let result=CargaCursosAprobadosPage.separarCadena("773;281;445")
  let expected=3;
  it("Debe retornar 3", () =>{
    expect(result.length).toBe(expected);
  });
});
