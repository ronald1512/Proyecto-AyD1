import { browser, by, element, ExpectedConditions, protractor } from 'protractor';

export class NotasPersonalesPage {

  constructor() {
  }

  navigateTo() {
    // Navigate to the settings page of the app
    return browser.get('/notas-personales');
  }

  waitForError() {
    browser.wait(
      ExpectedConditions.presenceOf(element(by.css('.error'))),
      3000
    );
  }

  rootElement(){
    return element(by.css('app-notas-personales'));
  }

  getHeadingText(){
    return element(by.id('headingNotas')).getText();
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
