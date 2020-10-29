import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotasPersonalesPage } from './notas-personales.page';
import { Router } from '@angular/router';
import { ServicioNotasService } from './service/servicio-notas.service';
import { AngularFirestore } from "@angular/fire/firestore";
import { UserService } from "src/app/services/user.service";

class MockedRouter extends Router {
  constructor(){
    super(null, null, null, null, null, null, null, null);
  }
  navigate(ruta:[]):Promise<boolean>{
    return null;
  }
}

describe('Component: Notas personales', () => {
  let component: NotasPersonalesPage;
  let service: ServicioNotasService;
  let firestore: AngularFirestore;
  let userService: UserService;
  let router:MockedRouter;

  beforeEach(()=>{
    //router=new MockedRouter();
    service=new ServicioNotasService(firestore, userService);
    component=new NotasPersonalesPage(router, service);
  });

  afterEach(()=>{
    localStorage.removeItem('nota');
    router=null;
    service=null;
  });

  it('Debe guardar la nota en localStorage', ()=>{
    localStorage.setItem("nota",JSON.stringify({titulo:"Nota0", cuerpo:"Nueva nota"}));
    expect(component.isSaved()).toBeTruthy();
  });

  it('No debe de tener guardada la nota en localStorage', ()=>{
    expect(component.isSaved()).toBeFalsy();
  });

  it('Debe recuperar un uid del usuario autenticado',()=>{
    spyOn(service, 'getUsuario').and.callFake(()=>{
      return null; 
    })
    expect(service.getUsuario()).toEqual(null);
  });

  it('Debe recuperar las notas del usuario loggeado',()=>{
    spyOn(service, 'getNotas').and.callFake(function(place){
      return []; 
    }); 
    expect(service.getNotas('123')).toEqual([]);
  });


});
