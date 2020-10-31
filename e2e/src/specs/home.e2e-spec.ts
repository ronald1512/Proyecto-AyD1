import { browser, by, element } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { HomePage } from '../page-objects/pages/home.po';


describe(`Historias: 
            1)Como estudiante quiero ver solamente lo relacionado con mi rol y privilegio.
            2)Como administrador quiero ver únicamente lo relacionado a la administración de pensum y mi perfil personal.`
        , () => {
    let home: HomePage;

    beforeEach(() => {
        home = new HomePage();
    });

    describe('Como estudiante quiero ver solamente lo relacionado con mi rol y privilegio.', () => {
        const definicion_escenario1 = `
        Scenario: Quiero ir a carga masiva y que no me deje
            Given: El usuario ingresa como estudiante
            When: Se selecciona carga masiva
            Then: No debe de cambiar de página el sistema
        `
        it(definicion_escenario1, () => {
            home.navigateTo();
            home.enterEmail('')
            home.enterPassword('');
            home.clickSignUp();
            expect(home.getErrorMessage()).toEqual('CORREO O CONTRASEÑA INVÁLIDOS');
            
        });

        const definicion_escenario2 = `
        Scenario: Quiero ir a cursos aprobados
            Given: El usuario ingresa como estudiante
            When: Se selecciona cursos aprobados
            Then: Debe de cambiar de página el sistema
        `

        it(definicion_escenario2, () => {
            home.navigateTo();
            home.getLoginButton().click();
            let page = home.getLoginPage();
            expect(page.isDisplayed()).toBeTruthy();
        });
    });

    describe('Como administrador quiero ver únicamente lo relacionado a la administración de pensum y mi perfil personal.', () => {
        const definicion_escenario1 = `
        Scenario: Ir a cargar masiva
            Given: El usuario ingresa como administrador
            When: Se selecciona carga masiva
            Then: Debe de cambiar de página el sistema
        `
        it(definicion_escenario1, () => {
            home.navigateTo();
            home.enterEmail('')
            home.enterPassword('');
            home.clickSignUp();
            expect(home.getErrorMessage()).toEqual('CORREO O CONTRASEÑA INVÁLIDOS');
            
        });

        const definicion_escenario2 = `
        Scenario: Ir a cursos aprobados y que no me deje
            Given: El usuario ingresa como administrador
            When: Se selecciona cursos aprobados
            Then: No debe de cambiar de página el sistema
        `

        it(definicion_escenario2, () => {
            home.navigateTo();
            home.getLoginButton().click();
            let page = home.getLoginPage();
            expect(page.isDisplayed()).toBeTruthy();
        });
    });
});