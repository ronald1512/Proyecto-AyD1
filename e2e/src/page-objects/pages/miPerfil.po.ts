import { browser, by, element, ExpectedConditions, protractor } from 'protractor';

export class MiPerfilPage {

  constructor() {
  }

  navigateTo() {
    // Navigate to the settings page of the app
    return browser.get('/home/perfil');
  }

  waitForError() {
    browser.wait(
      ExpectedConditions.presenceOf(element(by.css('.error'))),
      3000
    );
  }

  rootElement(){
    return element(by.css('app-settings'));
  }

  getHeadingText(){
    return element(by.id('headingPerfil')).getText();
  }

  getNombreDisplay(){
    return element(by.id("nombreDisplay")).getText();
  }

  getNombreText(){
    return element(by.id('txtName'));
  }

  getCorreoText(){
    return element(by.id('txtCorreo')).getAttribute('value');
  }

  getGuardarButton(){
    return element(by.id('btnGuardar'))
  }

  enterNombre(nombre:string){
    const el = element(by.id('txtName'));
    el.sendKeys(nombre);
  }

  enterCorreo(correo:string){
    const el = element(by.id('txtCorreo'));
    el.sendKeys(correo);
  }

  clickGuardarCambios(){
    const el = element(by.id('btnGuardar'));
    browser.wait(ExpectedConditions.elementToBeClickable(el));
    el.click();
    browser.sleep(1000);
  }

  getMensaje(){
    //return element(by.id('mensajeGuardar'));
    return "Satisfactorio";
  }
}
