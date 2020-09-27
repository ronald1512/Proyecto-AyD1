import { MiPerfilPage } from '../page-objects/pages/miPerfil.po';
import { LoginPage } from '../page-objects/pages/login.po';
import { HomePage } from '../page-objects/pages/home.po';
import { browser, by, element } from 'protractor';
import { protractor } from 'protractor/built/ptor';

describe('Historia - Perfil', () => {
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


  describe('Feature: Ver y actualizar mis datos personales', () => {
    
    const definicion_escenario1=`
        Scenario: Deseo ver mis datos personales
            Given: He iniciado sesión en mi cuenta
            And: Estoy en la página de perfil
            When Se carga la página
            Then: Se deben mostrar mis datos personales
    `;

    it(definicion_escenario1, () => {
        expect(perfil.getHeadingText()).toEqual(expectedTitle);
        expect(perfil.getCorreoText()).toEqual("chechajosue1@gmail.com");
    });

    const definicion_escenario2=`
        Scenario: Actualizar mi nombre
            Given: He iniciado sesión en mi cuenta
            And: Estoy en la página de perfil
            And: Ingreso un nombre en la casilla de nombre
            And: El nombre contiene por lo menos 1 caracter
            When: Hago click en el botón de "GUARDAR CAMBIOS"
            Then: Mi nombre es actualizado
    `;

    it(definicion_escenario2, () => {
        perfil.navigateTo();
        perfil.enterNombre('Josué');
        perfil.clickGuardarCambios();
        expect(perfil.getMensaje()).toEqual("Satisfactorio");
    });

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
        perfil.navigateTo();
        perfil.enterCorreo('chechaj@protonmail.com');
        perfil.clickGuardarCambios();
        expect(perfil.getMensaje()).toEqual("Satisfactorio");
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