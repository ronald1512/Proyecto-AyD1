import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.class';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { ErrorHandler } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  toast; loading;
  user: User = new User();

  constructor(private toastCtrl: ToastController, private alertCtrl: AlertController, private loadinCtrl: LoadingController, private router: Router, private authSvc: AuthService, private alertController: AlertController) { }

  ngOnInit() {
  }

  

  async onLogin() {

    this.loading = await this.loadinCtrl.create({
      message: 'Cargando...',
    })

    this.loading.present();
    const user = await this.authSvc.onLogin(this.user);
    this.loading.dismiss();
    console.log(user);
    console.log('\n!!');
    if (user.user) {
      this.router.navigateByUrl('/home/tab1');
    } else {
      if(user.code){

        switch(user.code){
          case "auth/network-request-failed": {
            this.toastCtrl.create({
              header: '¡Incorrecto!',
              message: 'Correo o contraseña inválidos',
              position: 'bottom',
              duration: 2000,
              color: "danger",
              animated: true
            }).then((obj) => {
              obj.present();
            });
            break;
          }

          default:{
            this.toastCtrl.create({
              header: '¡Incorrecto!',
              message: 'Correo o contraseña inválidos',
              position: 'bottom',
              duration: 2000,
              color: "danger",
              animated: true
            }).then((obj) => {
              obj.present();
            });
          }

        }

        
      } else {
        this.toastCtrl.create({
          header: 'Error',
          message: 'No se pudo iniciar sesión',
          position: 'bottom',
          duration: 2000,
          color: "danger",
          animated: true
        }).then((obj) => {
          obj.present();
        });
      }
    }
    console.log('HOla');
  }

}
