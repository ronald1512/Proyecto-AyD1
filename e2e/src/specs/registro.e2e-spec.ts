import { browser, by, element } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { RegistroPage } from '../page-objects/pages/registro.po';

describe('', () => {
    let registro: RegistroPage;

    beforeEach(() => {
        registro = new RegistroPage();
    });

    describe('Feature: Como un estudiante quiero crear un usuario para acceder a la aplicación', () => {
        const definicion_escenario1 = `
        Scenario: No ingresar datos al formulario
            Given Dado que el usuario no ingresa sus credenciales en el formulario.
            When Cuando hace clic en el botón 'Registrarme'.
            Then Se debe mostrar el mensaje de error.
        `
        it(definicion_escenario1, () => {
            registro.navigateTo();
            registro.enterEmail('')
            registro.enterPassword('');
            registro.clickSignUp();
            expect(registro.getErrorMessage()).toEqual('CORREO O CONTRASEÑA INVÁLIDOS');
            
        });

        const definicion_escenario2 = `
        Scenario: Regresar a la pantalla de login
            Given Dado que el usuario prefiere no crear un usuario y regresar a la pantalla de 'login'
            When Cuando hace clic en el botón 'Login'.
            Then Se debe cambiar de página.
        `

        it(definicion_escenario2, () => {
            registro.navigateTo();
            registro.getLoginButton().click();
            let page = registro.getLoginPage();
            expect(page.isDisplayed()).toBeTruthy();
        });

        const definicion_escenario3 = `
        Scenario: Ingresar unicamente el correo en el formulario
            Given Dado que el usuario ingresa solo su correo.
            When Cuando hace clic en el botón 'Registrarme'.
            Then Se debe mostrar el mensaje de error.
        `

        it(definicion_escenario3, () => {
            registro.navigateTo();
            registro.enterEmail('test@gmail.com')
            registro.enterPassword('');
            registro.clickSignUp();
            expect(registro.getErrorMessage()).toEqual('CORREO O CONTRASEÑA INVÁLIDOS');
        });

        const definicion_escenario4 = `
        Scenario: Ingresar ambos datos al formulario
            Given Dado que el usuario ingresa sus credenciales en el formulario.
            When Cuando hace clic en el botón 'Registrarme'.
            Then Se debe mostrar la página de 'login'.
        `

        it(definicion_escenario4, () => {
            registro.navigateTo();
            var rightNow = new Date();
            var rightNow = new Date();
            var res = rightNow.toISOString().replace(/-/g,"").replace(/:/g,"").replace(/\./g,"");
            registro.enterEmail(`${res}@gmail.com`);
            registro.enterPassword('12345678');
            registro.clickSignUp();
            const EC = protractor.ExpectedConditions;
            browser.wait(EC.urlContains('/login'), 5000).then(function (result) {
                expect(result).toEqual(true);
            });
        });
    });
});