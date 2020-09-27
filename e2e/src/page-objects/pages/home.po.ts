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
/*
  clickCargaMasiva() {
    this.clickButton('#ir-carga-masiva');
  }
  */
}
