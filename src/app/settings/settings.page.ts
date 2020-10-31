import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { User } from '../models/user.interface'
import { UserService } from '../services/user.service';
import { from } from 'rxjs';
import { element } from 'protractor';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})

export class SettingsPage implements OnInit {
  user: User= {uid:'', email:'', displayName:'',rol:""};
  usuarios: Array<User>=[];
  constructor(public alertController: AlertController, private userService: UserService) { } 

  ngOnInit() {
    this.getUsers(); // inicializamos todo cuando la vista es cargada por primera vez
    this.actualizarCurrent();
  }

  actualizarCurrent(){
    let response = this.userService.getCurrentUser().then(function (firebaseUser) {
      console.log("Encontrado!");
      return firebaseUser;
    });

    const observable= from(response);
    observable.subscribe(res => (this.user={uid: res.uid, email: res.email, displayName:res.displayName,rol:""}));
  }


  getUsers(){
    this.usuarios= this.userService.getUserData();
  }


  checkdata(){
    if(SettingsPage.checkemail(this.user.email) && SettingsPage.checkname(this.user.displayName)){
      this.userService.updateUser(this.user, this.user.uid)
      this.fineAlert()
    }else{
      this.failAlert();
    }
  }

  fineAlert() {

    let mensaje = document.getElementById('mensajeGuardar');
    mensaje.innerHTML = 'Satisfactorio';
    /*const alert = await this.alertController.create({
      header: 'Satisfactorio',
      subHeader: 'Datos correctos',
      message: 'Datos personales modificados satisfactoriamente',
      buttons: ['OK']
    });
    await alert.present();*/
  }

  failAlert() {

    let mensaje = document.getElementById('mensajeGuardar');
    mensaje.innerHTML = 'Denegado';

    /*const alert = await this.alertController.create({
      header: 'DENEGADO',
      subHeader: 'Datos incorrectos',
      message: 'El correo debe contener @ y el nombre debe ser de mas de un caracter.',
      buttons: ['OK']
    });
    await alert.present();*/
  }

  public static checkemail(email:string):boolean{
    return email.includes("@",1);
  }

  public static checkname(name:string):boolean{
    return name.length>1;
  }
}
