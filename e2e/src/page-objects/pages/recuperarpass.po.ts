import { browser, by, element, ExpectedConditions } from 'protractor';

export class RecuperarPassPage {
  constructor() {
  }

  navigateTo() {
    return browser.get('/login/recuperar-pass');
  }

  waitForError() {
    browser.wait(
      ExpectedConditions.presenceOf(element(by.css('.error'))),
      3000
    );
  }

  //aqui vamos a poner toda la lógica para encontrar los elementos
  rootElement(){
    return element(by.css('app-recuperar-pass'));
  }

  getHeadingText(){
    return element(by.css('app-recuperar-pass > ion-title h2'));
  }

  getLoginButton(){
    return element(by.id('Regresarbutton'))

  }

  getLoginPage(){
    return element(by.css('app-login'));
  }

  enterEmail(correo:string){
    const el = element(by.css('app-recuperar-pass > .user'));
    el.sendKeys(correo);
  }

  clickEnviar(){
    const el = element(by.id('Enviarbutton'));
    browser.wait(ExpectedConditions.elementToBeClickable(el));
    el.click();
    browser.sleep(1000);
  }

  getErrorMessage(){
    return element(by.css('app-recuperar-pass p')).getText();
  }
}