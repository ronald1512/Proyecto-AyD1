import { AppPage } from '../page-objects/pages/app.po';
import { RegisterPage } from '../page-objects/pages/register.po';
import { MiPerfilPage } from '../page-objects/pages/miPerfil.po';
import { LoginPage } from '../page-objects/pages/login.po';
import { HomePage } from '../page-objects/pages/home.po';
import { HomeCargaMasivaPage } from '../page-objects/pages/homeCargaMasiva.po';

describe('Login', () => {
  const register = new RegisterPage();
  const app = new AppPage();
  const login = new LoginPage();
  const perfil = new MiPerfilPage();
  const tasks = new HomePage();
  const homeCargaMasiva=new HomeCargaMasivaPage();

  beforeEach(() => {
    login.load();
  });

  describe('before logged in', () => {
    it('displays the login screen', () => {

      expect(login.rootElement().isDisplayed()).toEqual(true);
    });
    
    /*
    it('allows in-app navigation to register', () => {
      login.clickRegister();
      //register.waitUntilVisible();
      //login.waitUntilInvisible();
    });
    
    it('displays an error message if the login fails', () => {
      login.enterEMail('organizate@test.com');
      login.enterPassword('organizate');
      login.clickSignIn();
      login.waitForError();
      expect(login.getErrorMessage()).toEqual(
        'Correo o contraseña inválidos'
      );
    });

    it('navigates to the tasks page if the login succeeds', () => {
      login.enterEMail('ronald@gmail.com');
      login.enterPassword('ronald123');
      login.clickSignIn();
      tasks.waitUntilVisible();
    });
    */
  });
/*
  describe('once logged in', () => {
    beforeEach(() => {
      tasks.waitUntilVisible();
    });

    it('allows navigation to My Profile', () => {
      tasks.clickPerfil();
      perfil.waitUntilVisible();
      homeCargaMasiva.waitUntilInvisible();
    });

    it('allows navigation back to Carga-Masiva', () => {
      tasks.clickCargaMasiva();
      perfil.waitUntilInvisible();
      tasks.clickCargaMasiva();
      homeCargaMasiva.waitUntilVisible();
    });
  });
  */
});