import { browser, by, element, ExpectedConditions } from 'protractor';
import { PageObjectBase } from './base.po';

export class MiPerfilPage extends PageObjectBase {

  constructor() {
    super('app-settings', '/home/perfil');
  }

}
