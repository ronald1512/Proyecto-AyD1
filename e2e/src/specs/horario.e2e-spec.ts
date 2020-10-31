import { HorarioPage } from '../page-objects/pages/horario.po';
import { LoginPage } from '../page-objects/pages/login.po';
import { HomePage } from '../page-objects/pages/home.po';
import { browser } from 'protractor';
import { protractor } from 'protractor/built/ptor';

describe('Historia - Crear horario', () => {
  let login: LoginPage;
  let horario: HorarioPage;

  let expectedTitle = 'CREAR HORARIO';

  beforeEach(() => {  
    login = new LoginPage();
    horario = new HorarioPage();
    login.navigateTo();
    login.enterEmail('ronald@gmail.com');
    login.enterPassword('ronald123');
    login.clickSignIn();
    horario.navigateTo();
  });


  describe('Feature: Como usuario quiero ver los cursos asignables y crear un horario', () => {
    
    const definicion_escenario1=`
        Scenario: Deseo consultar los cursos asignables
            Given: He iniciado sesión en mi cuenta
            And: Estoy en la página de creacion de horario
            When Se carga la página
            Then: Se deben mostrar los cursos asignables
    `;

    it(definicion_escenario1, () => {
        expect(horario.getHeadingText()).toEqual(expectedTitle);
    });

    const definicion_escenario2=`
        Scenario: Agregar un curso al horario
            Given: He iniciado sesión en mi cuenta
            And: Estoy en la página de creación de horario
            When: Hago clic a un curso asignable
            Then: Se abre la página de add-curso
    `;
    
    it(definicion_escenario2, () => {
        horario.navigateTo();
        horario.clickFirst();
        const EC = protractor.ExpectedConditions;
        browser.wait(EC.urlContains('crear-horario/add-curso'), 5000).then(function(result){
        expect(result).toEqual(true);
        });
    });
});
  
});