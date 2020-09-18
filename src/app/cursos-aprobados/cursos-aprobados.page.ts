import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { from } from 'rxjs';
import { CursosAprobadosService } from '../carga-cursos-aprobados/services/cursos-aprobados.service';
import { UserService } from '../services/user.service';
import { User } from '../shared/user.interface';

@Component({
  selector: 'app-cursos-aprobados',
  templateUrl: './cursos-aprobados.page.html',
  styleUrls: ['./cursos-aprobados.page.scss'],
})
export class CursosAprobadosPage implements OnInit {
  user: User= {uid:'', email:'', displayName:''};   //aqui voy a tener los datos del usuario actual
  lista: Array<any> = [
    {
      codigo: "017",
      nombre: "Social Humanistica 1"


    }
    , {
      codigo: "101",
      nombre: "Matematica basica 1"


    }
    , {
      codigo: "069",
      nombre: "Tecnica Complementaria 1"


    }

  ]

  cursosAprobados;  //aqui estan todas las filas de 'cursos-aprobados'. Para mostrar solo los del usuario actual usa ~ngIf="carnetEstudiante==user.uid" dentro de un *ngFor 

  private cursos_aprobados: string[] = [];

  constructor(private userService: UserService,private toastCtrl: ToastController, private cursos_aprobados_service:CursosAprobadosService) { }

  ngOnInit() {
    this.getCursosAprobados();
    console.log(this.cursosAprobados);
  }


  getCursosAprobados(){
    this.cursosAprobados = this.cursos_aprobados_service.getCursosAprobados();  //guardamos todo lo de esa collection en este arreglo
  }

  obtenerdatoscurso(codigo: string, nombre: String): void {
    if (this.codigoCursoValido(codigo)) {
      this.cursos_aprobados.push(codigo)
      this.toastCtrl.create({
        header: 'Cursos Aprobados',
        message: 'Curso agregado a aprobados',
        position: 'bottom',
        duration: 2000,
        animated: true
      }).then((obj) => {
        obj.present();
      });
    } else {
      this.toastCtrl.create({
        header: 'Ocurrio un error!',
        message: 'No se ha podido agregar el curso',
        position: 'bottom',
        duration: 2000,
        animated: true
      }).then((obj) => {
        obj.present();
      });
    }
  }

  public codigoCursoValido(codigo) {
    return !isNaN(codigo)
  }

}
