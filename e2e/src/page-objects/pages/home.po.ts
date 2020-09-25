import { PageObjectBase } from './base.po';


export class HomePage extends PageObjectBase {
  constructor() {
    super('app-home', '/home');
  }

  clickPerfil() {
    this.clickButton('#ir-perfil');
  }

  clickCargaMasiva() {
    this.clickButton('#ir-carga-masiva');
  }
}
