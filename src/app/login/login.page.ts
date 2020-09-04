import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.interface';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { ErrorHandler } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  toast; loading;

  constructor(private toastCtrl: ToastController, private alertCtrl: AlertController, private loadinCtrl: LoadingController, private router: Router, private authSvc: AuthService, private alertController: AlertController) { }

  ngOnInit() {
  }

  async onLogin(email, password) {

    this.loading = await this.loadinCtrl.create({
      message: 'Cargando...',
    })

    this.loading.present();
    const user = await this.authSvc.login(email.value, password.value);
    this.loading.dismiss();
    console.log(user);
    console.log('\n!!');
    if (user) {
      this.router.navigateByUrl('/home/tab1');
    } else {
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
}
