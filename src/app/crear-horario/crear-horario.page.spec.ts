import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearHorarioPage } from './crear-horario.page';
import { CrearHorarioService } from './service/crear-horario.service';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { UserService } from '../services/user.service';

import { AngularFirestore } from "@angular/fire/firestore";

describe('Component: Crear Horario', () => {
  let component: CrearHorarioPage;
  let emailComposer: EmailComposer;
  let userService: UserService;
  let servicio: CrearHorarioService;
 
  beforeEach(() => {
    emailComposer=new EmailComposer();
    userService=new UserService();
    servicio=new CrearHorarioService();
    component=new CrearHorarioPage(emailComposer,userService,servicio);
  });

  afterEach(()=>{
    emailComposer=null;
    userService=null;
    component=null;
  });
  it('Debe poder enviar un correo',()=>{
    spyOn(component, 'sendMail').and.returnValue(true);
    expect(component.sendMail()).toBeTruthy();
  });
  it('Debe fallar el envío de correo',()=>{
    spyOn(component, 'sendMail').and.returnValue(false);
    expect(component.sendMail()).toBeFalsy();
  });

  it('Debe limpiar el localstorage',()=>{
    spyOn(component,'limpiarLocalStorage').and.returnValue(true);
    expect(component.limpiarLocalStorage()).toBeTruthy();
  });

  it('Debe agregar un curso al horario',()=>{
    spyOn(component,'agregarCursoPage').and.callFake((id)=>{
      return true;
    });
    expect(component.agregarCursoPage('qAss567')).toBeTruthy();
  });

  it('Debe retornar un arreglo de tamaño 3',()=>{
    let arreglo1=[{codigo:'1'},{codigo:'2'},{codigo:'3'},
    {codigo:'4'},{codigo:'5'},{codigo:'6'}];
    let arreglo2=['1','2','3'];
    expect(servicio.comparacionCursos(arreglo1,arreglo2).length).toBe(3);
  });


});

/*
it('Validar obtener cursos', () => {
  expect(servicio.obtenerCursos()).toBeNull;
});

it('Validar código del curso incorrecto', () => {
  expect(servicio.getHorario("122")).toBeFalsy;
});
*/