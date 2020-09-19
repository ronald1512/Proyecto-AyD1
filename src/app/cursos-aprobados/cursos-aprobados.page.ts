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
  user: User = { uid: '', email: '', displayName: '' };   //aqui voy a tener los datos del usuario actual
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
  array1 = [];//para todos los cursos
  array2 = []; //para cursos ganados por el estudiante
  array3 = [];//para cursos pendientes
  private cursos_aprobados: string[] = [];
  private todos: object[] = [];
  constructor(private userService: UserService, private toastCtrl: ToastController, private cursos_aprobados_service: CursosAprobadosService) { }

  ngOnInit() {
    this.getCursosAprobados();
    console.log(this.cursosAprobados);
    this.getTodos();
    // console.log("TODOS SON" + this.getTodos());
  }


  getCursosAprobados() {
    this.cursosAprobados = this.cursos_aprobados_service.getCursosAprobados();  //guardamos todo lo de esa collection en este arreglo
  }


  getTodos() {

    //console.log("ENTRE A GET TODOS")
    this.cursos_aprobados_service.getTodos().subscribe(res1 => {
      // console.log("DENTRO")

      //  console.log("LA LONGITUD ES "+res1.length)
      for (let i = 0; i < res1.length; i++) {
        this.array1.push(res1[i].payload.doc.data())
      }
      console.log("EL ARRAY ES " + this.array1[0].nombre);
      this.getCursosAprobados();
      console.log("EL CARNET ES " + this.cursosAprobados.carnetEstudiante)


      for (let i = 0; i < this.cursosAprobados.cursosAprobados.lenght; i++) {
        console.log("DENTRO")
        for (let j = 0; j < this.array1.length; j++) {
          // console.log(" EL CURSO APROBADO ES "+this.cursosAprobados[i]);
          if (this.cursosAprobados[i] == this.array1[j].codigo) {
            this.array2.push(this.array1[j]);
          }

        }

      }


    });
    //  let array1=[];

    //this.todos = this.cursos_aprobados_service.getTodos();  //guardamos todo lo de esa collection en este arreglo
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
