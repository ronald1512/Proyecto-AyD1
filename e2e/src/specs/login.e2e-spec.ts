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

  describe('Componentes antes de iniciar sesión', () => {
    it('Muestra la vista de inicio de sesión', () => {
      login.navigateTo();
      expect(login.rootElement().isDisplayed()).toEqual(true);
    });

    it (`Debe tener como título (${expectedTitle})`, ()=>{
      login.navigateTo();
      expect(expectedTitle).toEqual(expectedTitle);
    });

    
    it('Debe mostrar el botón de navegación', ()=>{
      login.navigateTo();
      expect(login.getRegistrationButton().getText()).toEqual('registro');
    });

    
    it('El párrafo de error debe mostrarse sin mensajes de error', ()=>{
      login.navigateTo();
      expect(login.getErrorMessage()).toEqual('');
    })
  })


  describe('Navegación antes de iniciar sesión', () => {
    
    
    it('Permite navegar hacia la vista registro', () => {
      login.getRegistrationButton().click();
      let page=login.getRegistrationPage();
      expect(page.isDisplayed()).toBeTruthy();
    });

  });



  describe('Fallo de inicio de sesión por credenciales invalidas', () => {
    it('muestra un error si el inicio de sesión falla', () => {
      login.navigateTo();
      login.enterEmail('organizate@test.com')
      login.enterPassword('organizate');
      login.clickSignIn();
      expect(login.getErrorMessage()).toEqual('CORREO O CONTRASEÑA INVÁLIDOS','CORREO O CONTRASEÑA INVÁLIDOS');
    });
  });

  describe('Inicio de sesión exitoso', () => {
    it('Navega a vista de carga masiva si el inicio es exitoso', () => {
      login.navigateTo();
      login.enterEmail('ronald@gmail.com');
      login.enterPassword('ronald123');
      login.clickSignIn();
      const EC = protractor.ExpectedConditions;
      browser.wait(EC.urlContains('home/carga-masiva'), 5000).then(function(result){
        expect(result).toEqual(true, 'bienvenido ronald@gmail.com');
      });
    });
  });

  describe('Escenario #4 - Navegación una vez iniciada la sesión', () => {

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