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


  describe('Feature: Ver y crear notas personales', () => {
    
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

    /*
    const definicion_escenario3=`
        Scenario: Actualizar mi correo
            Given: He iniciado sesión en mi cuenta
            And: Estoy en la página de perfil
            And: Ingreso un correo en la casilla de correo
            And: El correo tiene el formato correcto
            When: Hago click en el botón de "GUARDAR CAMBIOS"
            Then: Mi correo es actualizado
    `;

    it(definicion_escenario3, () => {
        notas.navigateTo();
        notas.enterCorreo('chechaj@protonmail.com');
        notas.clickGuardarCambios();
        expect(notas.getMensaje()).toEqual("Satisfactorio");
    });

    const definicion_escenario4=`
        Scenario: Actualizar mi nombre y correo
            Given: He iniciado sesión en mi cuenta
            And: Estoy en la página de perfil
            And: Ingreso un nombre en la casilla de nombre
            And: Ingreso un correo en la casilla de correo
            And: El correo tiene el formato correcto
            When: Hago click en el botón de "GUARDAR CAMBIOS"
            Then: Mi correo es actualizado
    `;

    it('Actualizar correo y nombre', () => {
        notas.navigateTo();
        notas.enterNombre('César Josué');
        notas.enterCorreo('chechaj@protonmail.com');
        notas.clickGuardarCambios();
        expect(notas.getMensaje()).toEqual("Satisfactorio");
    });
    */
});
  
});