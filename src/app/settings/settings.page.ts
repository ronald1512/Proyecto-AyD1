import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { User } from '../models/user.interface'
import { UserService } from '../services/user.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})

export class SettingsPage implements OnInit {
  user: User= {uid:'', email:'', displayName:''};
  usuarios: Array<User>=[];
  constructor(public alertController: AlertController, private userService: UserService) { } 

  async ngOnInit() {
    this.getUsers(); // inicializamos todo cuando la vista es cargada por primera vez
    const first = await this.actualizarCurrent();

    for (const iterator of this.usuarios) {
      console.log(iterator);
      if(iterator.uid==this.user.uid){
        this.user.displayName=iterator.displayName;
        break;
      }
    }
  }

  async actualizarCurrent(){
    let response = this.userService.getCurrentUser().then(function (firebaseUser) {
      console.log("Encontrado!");
      return firebaseUser;
    });

    const observable= from(response);
    observable.subscribe(res => (this.user={uid: res.uid, email: res.email, displayName:res.displayName}));
  }


  async getUsers(){
    this.usuarios= await this.userService.getUserData();
  }


  checkdata(){
    if(SettingsPage.checkemail(this.user.email) && SettingsPage.checkname(this.user.displayName)){
      this.userService.updateUser(this.user, this.user.uid)
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
