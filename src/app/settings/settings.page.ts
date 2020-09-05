import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
//import { User } from '../shared/user.class';
import { User } from '../models/user.interface'
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})

export class SettingsPage implements OnInit {
  user: User= {uid:'', email:'', displayName:''};
  constructor(public alertController: AlertController,private userService: UserService) { }

  ngOnInit() {
  }

  checkdata(){
    if(SettingsPage.checkemail(this.user.email) && SettingsPage.checkname(this.user.displayName)){
      //this.userService.updateUser(this.user, '2m0rjlG4hhQliuzEWDJ3xlrH0Kz1')
      this.fineAlert()
    }else{
      this.failAlert();
    }
  }

  async fineAlert() {
    const alert = await this.alertController.create({
      header: 'Satisfactorio',
      subHeader: 'Datos correctos',
      message: 'Datos personales modificados satisfactoriamente',
      buttons: ['OK']
    });
    await alert.present();
  }

  async failAlert() {
    const alert = await this.alertController.create({
      header: 'DENEGADO',
      subHeader: 'Datos incorrectos',
      message: 'El correo debe contener @ y el nombre debe ser de mas de un caracter.',
      buttons: ['OK']
    });
    await alert.present();
  }

  public static checkemail(email:string):boolean{
    return email.includes("@",1);
  }

  public static checkname(name:string):boolean{
    return name.length>1;
  }
}
