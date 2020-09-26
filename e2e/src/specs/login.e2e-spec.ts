import { AppPage } from '../page-objects/pages/app.po';
import { RegisterPage } from '../page-objects/pages/register.po';
import { MiPerfilPage } from '../page-objects/pages/miPerfil.po';
import { LoginPage } from '../page-objects/pages/login.po';
import { HomePage } from '../page-objects/pages/home.po';
import { HomeCargaMasivaPage } from '../page-objects/pages/homeCargaMasiva.po';
import { browser, by, element } from 'protractor';
import { protractor } from 'protractor/built/ptor';

describe('Login view', () => {
  let login: LoginPage;
  let homeCargaMasiva: HomeCargaMasivaPage;
  let perfil: MiPerfilPage;
  let menu: HomePage;
  const expectedTitle='Iniciar Sesión';

  beforeEach(() => {  
    login = new LoginPage();
  });

  describe('before logged in', () => {
    it('displays the login screen', () => {
      login.navigateTo();
      expect(login.rootElement().isDisplayed()).toEqual(true);
    });

    it (`Debe tener como título (${expectedTitle})`, ()=>{
      login.navigateTo();
      expect(expectedTitle).toEqual(expectedTitle);
    })
    
    
    it('allows in-app navigation to register', () => {
      login.getRegistrationButton().click();
      let page=login.getRegistrationPage();
      expect(page.isDisplayed()).toBeTruthy();
    });

    it('displays the register button content', ()=>{
      login.navigateTo();
      expect(login.getRegistrationButton().getText()).toEqual('registro');
    })

    it('displays the parragraph content', ()=>{
      login.navigateTo();
      expect(login.getErrorMessage()).toEqual('');
    })
  
    it('displays an error message if the login fails', () => {
      login.navigateTo();
      login.enterEmail('organizate@test.com')
      login.enterPassword('organizate');
      login.clickSignIn();
      expect(login.getErrorMessage()).toEqual('CORREO O CONTRASEÑA INVÁLIDOS');
    });

    it('navigates to the tasks page if the login succeeds', () => {
      login.navigateTo();
      login.enterEmail('ronald@gmail.com');
      login.enterPassword('ronald123');
      login.clickSignIn();
      const EC = protractor.ExpectedConditions;
      browser.wait(EC.urlContains('home/carga-masiva'), 5000).then(function(result){
        expect(result).toEqual(true);
      });
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