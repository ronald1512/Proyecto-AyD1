import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.class';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { type } from 'os';

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

    if (user instanceof User) {
      this.router.navigateByUrl('/');
    } else {
      console.log(typeof(user));

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
      console.log('**Incorrecto');
    }
  }

}
