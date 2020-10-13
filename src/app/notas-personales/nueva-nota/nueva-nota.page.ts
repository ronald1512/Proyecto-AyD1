import { Component, OnInit } from "@angular/core";
import { ToastController, LoadingController } from "@ionic/angular";
import { ServicioNotasService } from "../service/servicio-notas.service";
import { Nota } from "../nota";
import { Router } from "@angular/router";

@Component({
  selector: "app-nueva-nota",
  templateUrl: "./nueva-nota.page.html",
  styleUrls: ["./nueva-nota.page.scss"],
})
export class NuevaNotaPage implements OnInit {
  titulo_nota: string;
  contenido_nota: string;

  constructor(
    private toastCtrl: ToastController,
    private servicioNotas: ServicioNotasService,
    private router: Router
  ) {}

  ngOnInit() {}

  guardarNota() {
    console.log("Titulo: ", this.titulo_nota);
    console.log("Contenido: ", this.contenido_nota);

    let nueva: Nota = {
      titulo: this.titulo_nota,
      carnetEstudiante: "1",
      contenido: this.contenido_nota,
    };

    let retorno = this.servicioNotas.insertarNota(nueva);

    if (!retorno) {
      this.toastCtrl
        .create({
          header: "¡Incorrecto!",
          message: "Hubo un error al guardar la nota",
          position: "bottom",
          duration: 2000,
          color: "danger",
          animated: true,
        })
        .then((obj) => {
          obj.present();
        });
        return;
    }

    this.toastCtrl.create({
      header: '¡Guardada!',
      message: 'Nota guardada con éxito',
      position: 'bottom',
      duration: 2000,
      color: "primary",
      animated: true
    }).then((obj) => {
      obj.present();
    });

    this.router.navigateByUrl('/notas-personales');
  }
}
