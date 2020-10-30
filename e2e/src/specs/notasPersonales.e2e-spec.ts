import { NotasPersonalesPage } from '../page-objects/pages/notasPersonales.po';
import { LoginPage } from '../page-objects/pages/login.po';
import { HomePage } from '../page-objects/pages/home.po';
import { browser } from 'protractor';
import { protractor } from 'protractor/built/ptor';

describe('Historia - Notas Personales', () => {
  let login: LoginPage;
  let notas: NotasPersonalesPage;
  let menu: HomePage;

  let expectedTitle = 'Notas Personales';

  beforeEach(() => {  
    login = new LoginPage();
    notas = new NotasPersonalesPage();
    login.navigateTo();
    login.enterEmail('ronald@gmail.com');
    login.enterPassword('ronald123');
    login.clickSignIn();
    notas.navigateTo();
  });


  describe('Feature: Como usuario quiero ver y crear notas personales', () => {
    
    const definicion_escenario1=`
        Scenario: Deseo consultar mis notas
            Given: He iniciado sesión en mi cuenta
            And: Estoy en la página de notas
            When Se carga la página
            Then: Se deben mostrar mis notas
    `;

    it(definicion_escenario1, () => {
        expect(notas.getHeadingText()).toEqual(expectedTitle);
    });

    
    const definicion_escenario2=`
        Scenario: Crear nueva nota
            Given: He iniciado sesión en mi cuenta
            And: Estoy en la página de notas
            When: Hago click en el botón de +
            Then: Se abre la pagina de nuevaNota
    `;

    it(definicion_escenario2, () => {
        notas.navigateTo();
        notas.clickNueva();
        const EC = protractor.ExpectedConditions;
        browser.wait(EC.urlContains('notas-personales/nueva-nota'), 5000).then(function(result){
        expect(result).toEqual(true);
      });
    });

    
});
  
});