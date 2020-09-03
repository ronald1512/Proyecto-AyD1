import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.class';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  toast; loading;
  user: User = new User();
  constructor(private toastCtrl: ToastController, private alertCtrl: AlertController, private loadinCtrl: LoadingController, private router: Router, private authSvc: AuthService, private alertController: AlertController) { }

  ngOnInit() {
  }

  async onRegister(){
    this.loading = await this.loadinCtrl.create({
      message: 'Cargando...',
    })

    this.loading.present();
    const user = await this.authSvc.onRegister(this.user);
    this.loading.dismiss();

    if(user){
      this.toastCtrl.create({
        header: 'Registro',
        message: 'Usuario creado correctamente',
        position: 'bottom',
        duration: 2000,
        animated: true
      }).then((obj) => {
        obj.present();
      });
      this.router.navigateByUrl('/home/tab1');
    } else {
      this.toastCtrl.create({
        header: '¡Incorrecto!',
        message: 'No se pudo crear el usuario',
        position: 'bottom',
        duration: 2000,
        animated: true
      }).then((obj) => {
        obj.present();
      });
    }
  }

}
