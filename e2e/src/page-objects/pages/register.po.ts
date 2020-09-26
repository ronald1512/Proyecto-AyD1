import { browser, by, element, ExpectedConditions } from 'protractor';
import { PageObjectBase } from './base.po';

export class RegisterPage extends PageObjectBase {

  constructor() {
    super('app-registro', '/registro');
  }

}
