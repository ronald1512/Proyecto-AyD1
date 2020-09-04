import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})


export class RegistroPage implements OnInit {
  toast; loading;

  constructor(private toastCtrl: ToastController, private loadinCtrl: LoadingController, private router: Router, private authSvc: AuthService) { }

  ngOnInit() {
  }

  async onRegister(email, password){
    this.loading = await this.loadinCtrl.create({
      message: 'Cargando...',
    })
    alert(email);
    console.log(password);
    this.loading.present();
    const user = await this.authSvc.register(email.value, password.value);
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
