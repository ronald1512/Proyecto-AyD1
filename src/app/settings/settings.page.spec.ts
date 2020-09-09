import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SettingsPage } from './settings.page';

describe('SettingsPage', () => {

  let email="ronaldgabriel3@hotmail.es";
  let name="ronald romero";
  let result=SettingsPage.checkemail(email);
  let result2=SettingsPage.checkname(name);

  it("Debe contener '@'", () =>{
    expect(result).toBeTruthy();
  });

  it("El nombre de usuario debe ser de mas de un caracter'", () =>{
    expect(result2).toBeTruthy();
  });

});
