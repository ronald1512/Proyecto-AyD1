import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.interface';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { ErrorHandler } from '@angular/core';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  toast; loading;
  error_message='';
  constructor(private userService: UserService,private toastCtrl: ToastController, private alertCtrl: AlertController, private loadinCtrl: LoadingController, private router: Router, private authSvc: AuthService, private alertController: AlertController) { }

  ngOnInit() {
    //this.error_message="nooo";
  }

  async onLogin(email, password) {
    this.error_message='';
    this.loading = await this.loadinCtrl.create({
      message: 'Cargando...',
    })

    this.loading.present();
    const user = await this.authSvc.login(email.value, password.value);
    this.loading.dismiss();
    console.log(user);
    console.log('\n!!');
    if (user) {
        //let bool=await this.userService.esAdmin();
        
        this.router.navigateByUrl('/home/perfil');
      
    } else {
      this.error_message='Correo o contraseña inválidos';
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

  registro(): void{
    this.router.navigateByUrl('/registro');
  }
}
