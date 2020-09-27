import { MiPerfilPage } from '../page-objects/pages/miPerfil.po';
import { LoginPage } from '../page-objects/pages/login.po';
import { HomePage } from '../page-objects/pages/home.po';
import { browser, by, element } from 'protractor';
import { protractor } from 'protractor/built/ptor';

describe('Perfil view', () => {
  let login: LoginPage;
  let perfil: MiPerfilPage;
  let menu: HomePage;

  let expectedTitle = 'Mi Perfil';

  beforeEach(() => {  
    login = new LoginPage();
    perfil = new MiPerfilPage();
    login.navigateTo();
    login.enterEmail('chechajosue1@gmail.com');
    login.enterPassword('12345678');
    login.clickSignIn();
    perfil.navigateTo();
  });


  describe('Ver datos personales', () => {
    
    it('Comprobar el titulo del perfil', () => {
        expect(perfil.getHeadingText()).toEqual(expectedTitle);
    });
    
    it('Comprobar el correo', () => {
        expect(perfil.getCorreoText()).toEqual("chechajosue1@gmail.com");
    });

    it('Actualizar nombre', () => {
        perfil.navigateTo();
        perfil.enterNombre('Josué');
        perfil.clickGuardarCambios();
        expect(perfil.getMensaje()).toEqual("Satisfactorio");
    });

    it('Actualizar correo', () => {
        perfil.navigateTo();
        perfil.enterCorreo('chechaj@protonmail.com');
        perfil.clickGuardarCambios();
        expect(perfil.getMensaje()).toEqual("Satisfactorio");
    });

    it('Actualizar correo y nombre', () => {
        perfil.navigateTo();
        perfil.enterNombre('César Josué');
        perfil.enterCorreo('chechaj@protonmail.com');
        perfil.clickGuardarCambios();
        expect(perfil.getMensaje()).toEqual("Satisfactorio");
    });

});

  /*
  describe('once logged in', () => {
    beforeEach(() => {
      menu=new HomePage();
    });

    it('allows navigation to My Profile', () => {
      menu.clickPerfil();
      
      const EC = protractor.ExpectedConditions;
      browser.wait(EC.urlContains('home/perfil'), 5000).then(function(result){
        expect(result).toEqual(true);
      });
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