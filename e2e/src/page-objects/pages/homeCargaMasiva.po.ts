import { browser, by, element, ExpectedConditions } from 'protractor';

export class HomeCargaMasivaPage {
  constructor() {
  }

  navigateTo() {
    // Navigate to the carga-masiva page of the app
    return browser.get('/home/carga-masiva');
  }

  waitUntilVisible() {
    browser.wait(ExpectedConditions.visibilityOf(this.rootElement()), 3000);
  }

  rootElement(){
    return element(by.css('app-cargamasiva'));
  }
}
