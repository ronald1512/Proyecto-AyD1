import { TestBed } from '@angular/core/testing';
import { AngularFireAuth} from '@angular/fire/auth';
import { AuthService } from './auth.service';
import { AngularFirestore } from 'angularfire2/firestore';

describe('AuthService', () => {

  let service: AuthService;

  beforeEach(() => {
    service = new AuthService();
  });

  it('Validar correo correcto', () => {
    expect(service.verificarCorreo('hola@correo.com')).toBeTruthy();
  });

  it('Validar correo incorrecto', () => {
    expect(service.verificarCorreo('holacorreo.com')).toBeFalsy();
  });
});
