import { browser, by, element } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { RecuperarPassPage } from '../page-objects/pages/recuperarpass.po';


describe('Historia - Registro', () => {
    let recuperarpass: RecuperarPassPage;

    beforeEach(() => {
        recuperarpass = new RecuperarPassPage();
    });

    describe('Feature: Como usuario quiero poder recuperar mi contraseña', () => {
        const definicion_escenario1 = `
        Scenario: No ingresar datos al formulario
            Given Dado que el usuario no ingresa su correo
            When Cuando hace clic en el botón 'Enviar'.
            Then Se debe mostrar el mensaje de error.
        `
        it(definicion_escenario1, () => {
            recuperarpass.navigateTo();
            recuperarpass.enterEmail('')
            recuperarpass.clickEnviar()
            expect(recuperarpass.getErrorMessage()).toEqual('NO SE INGRESO CORREO!');
            
        });

        const definicion_escenario2 = `
        Scenario: Regresar a la pantalla de login
            Given Dado que el usuario prefiere no solicitar el cambio de contraseña
            When Cuando hace clic en el botón 'Regresar'.
            Then Se debe cambiar de página.
        `

        it(definicion_escenario2, () => {
            recuperarpass.navigateTo();
            recuperarpass.getLoginButton().click();
            let page = recuperarpass.getLoginPage();
            expect(page.isDisplayed()).toBeTruthy();
        });

        const definicion_escenario3 = `
        Scenario: Ingresar datos al formulario
            Given Dado que el usuario ingresa su correo.
            When Cuando hace clic en el botón 'Enviar'.
            Then Debe enviar un correo y quedarse en esa página.
        `

        it(definicion_escenario3, () => {
            recuperarpass.navigateTo();
            recuperarpass.enterEmail('baco420151@gmail.com')
            //recuperarpass.clickEnviar();
            const EC = protractor.ExpectedConditions;
            expect(recuperarpass.getMessage()).toBe('SUCCESS');
        });
    });
});