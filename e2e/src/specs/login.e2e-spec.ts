import { AppPage } from '../page-objects/pages/app.po';
import { RegisterPage } from '../page-objects/pages/register.po';
import { MiPerfilPage } from '../page-objects/pages/miPerfil.po';
import { LoginPage } from '../page-objects/pages/login.po';
import { HomePage } from '../page-objects/pages/home.po';
import { HomeCargaMasivaPage } from '../page-objects/pages/homeCargaMasiva.po';
import { browser, by, element } from 'protractor';
import { protractor } from 'protractor/built/ptor';

describe('Historia - Inicio de sesión', () => {
  let login: LoginPage;
  let homeCargaMasiva: HomeCargaMasivaPage;
  let perfil: MiPerfilPage;
  let menu: HomePage;
  const expectedTitle='Iniciar Sesión';

  beforeEach(() => {  
    login = new LoginPage();
  });

  describe('Feature: Como usuario quiero acceder a la aplicación', () => {
    const definicion_escenario1=`
      Scenario: Abro la aplicación
        Given: El usuario ingresa a la url de la aplicación
        When: Se carga la aplicación
        Then: Se debe mostrar la vista de inicio de sesión, el botón de navegación y el párrafo de error debe mostrarse sin errores de error.
    `
    it(definicion_escenario1, () => {
      login.navigateTo();
      expect(login.rootElement().isDisplayed()).toEqual(true);
      login.navigateTo();
      expect(expectedTitle).toEqual(expectedTitle);
      login.navigateTo();
      expect(login.getRegistrationButton().getText()).toEqual('registro');
      login.navigateTo();
      expect(login.getErrorMessage()).toEqual('');
    });
    const definicion_escenario2=`
      Scenario: Navegar hacia la vista de registro
        Given: El usuario se encuentra en la vista login
        When: Presiona el botón 'registro'
        Then: Se debe mostrar la vista de Registro
    `
    it(definicion_escenario2, () => {
      login.getRegistrationButton().click();
      let page=login.getRegistrationPage();
      expect(page.isDisplayed()).toBeTruthy();
    });

    const definicion_escenario3=`
      Scenario: Credenciales invalidas
        Given: El usuario agrega credenciales inválidas a los campos
        When: Presiona el botón 'signin'
        Then: Se debe mostrar el mensaje 'CORREO O CONTRASEÑA INVÁLIDOS'
    `
    it(definicion_escenario3, () => {
      login.navigateTo();
      login.enterEmail('organizate@test.com')
      login.enterPassword('organizate');
      login.clickSignIn();
      expect(login.getErrorMessage()).toEqual('CORREO O CONTRASEÑA INVÁLIDOS','CORREO O CONTRASEÑA INVÁLIDOS');
    });
    const definicion_escenario4=`
      Scenario: Inicio de sesión exitoso
        Given: El usuario agrega credenciales válidas a los campos
        When: Presiona el botón 'signin'
        Then: Se debe mostrar navegar a vista de carga masiva
    `
    it(definicion_escenario4, () => {
      login.navigateTo();
      login.enterEmail('ronald@gmail.com');
      login.enterPassword('ronald123');
      login.clickSignIn();
      const EC = protractor.ExpectedConditions;
      browser.wait(EC.urlContains('home/perfil'), 5000).then(function(result){
        expect(result).toEqual(true, 'bienvenido ronald@gmail.com');
      });
    });
  })


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