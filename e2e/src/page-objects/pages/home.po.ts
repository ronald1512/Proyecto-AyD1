import { browser, by, element, ExpectedConditions } from 'protractor';


export class HomePage {
  constructor() {
  }

  clickPerfil() {
    const component= element(by.css('app-home'));
    const el = component.element(by.id('ir-perfil'));
    browser.wait(ExpectedConditions.elementToBeClickable(el));
    el.click();
    browser.sleep(1000);
  }

  navigateTo() {
    return browser.get('/registro');
  }

  waitForError() {
    browser.wait(
      ExpectedConditions.presenceOf(element(by.css('.error'))),
      3000
    );
  }

  //aqui vamos a poner toda la lógica para encontrar los elementos
  rootElement(){
    return element(by.css('app-registro'));
  }

  getHeadingText(){
    return element(by.css('app-login > ion-title h2'));
  }

  getLoginButton(){
    return element(by.id('loginnbutton'))

  }

  getLoginPage(){
    return element(by.css('app-login'));
  }

  enterEmail(correo:string){
    const el = element(by.css('app-registro > .user'));
    el.sendKeys(correo);
  }

  enterPassword(password:string){
    const el = element(by.css('app-registro > .contra'));
    el.sendKeys(password);
  }

  clickSignUp(){
    const el = element(by.id('signup-button'));
    browser.wait(ExpectedConditions.elementToBeClickable(el));
    el.click();
    browser.sleep(1000);
  }

  getErrorMessage(){
    return element(by.css('app-registro p')).getText();
  }

}
