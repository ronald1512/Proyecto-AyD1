import { TestBed } from '@angular/core/testing';
import { AngularFireAuth} from '@angular/fire/auth';
import { AuthService } from './auth.service';
import { AngularFirestore } from 'angularfire2/firestore';


let Asvc = null;

describe('AuthService', () => {

  beforeEach(() =>{
    Asvc = new AuthService();
  });

  it('debería mostrar 0', () => {  
    expect(Asvc.suma("")).toBe(0);
  });

  it('debería mostrar 5', () => { 
    var res =  Asvc.suma("5");
    expect(res).toBe(5);
  });

  it('debería mostrar 7', () => { 
    var res =  Asvc.suma("5,2");
    expect(res).toBe(7);
  });
});
