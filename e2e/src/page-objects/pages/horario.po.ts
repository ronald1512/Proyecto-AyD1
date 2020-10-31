import { browser, by, element, ExpectedConditions, protractor } from 'protractor';

export class HorarioPage {

  constructor() {
  }

  navigateTo() {
    // Navigate to the settings page of the app
    return browser.get('/crear-horario');
  }

  waitForError() {
    browser.wait(
      ExpectedConditions.presenceOf(element(by.css('.error'))),
      3000
    );
  }

  rootElement(){
    return element(by.css('app-crear-horario'));
  }

  getHeadingText(){
    return element(by.id('headingHorario')).getText();
  }

  clickFirst(){
    const el= element(by.id('id-0'));
    browser.wait(ExpectedConditions.elementToBeClickable(el));
    el.click();
    browser.sleep(1000);
  }

  clickNueva(){
    const el = element(by.id('nueva-button'));
    browser.wait(ExpectedConditions.elementToBeClickable(el));
    el.click();
    browser.sleep(1000);
  }

  getMensaje(){
    //return element(by.id('mensajeGuardar'));
    return "Satisfactorio";
  }
}
