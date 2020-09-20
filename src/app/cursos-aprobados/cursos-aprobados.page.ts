import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { from } from 'rxjs';
import { CursosAprobadosService } from '../carga-cursos-aprobados/services/cursos-aprobados.service';
import { UserService } from '../services/user.service';
import { User } from '../shared/user.interface';
import { Cursos_aprobados } from 'src/app/shared/cursos-aprobados.interface';
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
  //ARRAYS PIVOTES PARA OBTENER LOS CURSOS APROBADOS POR EL ESTUDIANTE
  array2 = [];
  array3 = [];
  //ARRAY PARA GUARDAR APROBADOS
  array4 = [];
  //ARRAY PARA MOSTRAR PENDIENTES
  array5 = [];
  private cursos_aprobados: string[] = [];
  private cursos2: any[] = [];
  private todos: object[] = [];
  cursos: Array<Cursos_aprobados> = [];
  constructor(private userService: UserService, private toastCtrl: ToastController, private cursos_aprobados_service: CursosAprobadosService) { }

  ngOnInit() {
    // this.getCursosAprobados();
   // this.getAprobados();
   // console.log(this.cursos.length);
    this.getTodos3();
    // console.log("TODOS SON" + this.getTodos());

    let response = this.userService.getCurrentUser().then(function (firebaseUser) {
      console.log("Encontrado!");
      return firebaseUser;
    });
    const observable= from(response);
    observable.subscribe(res => (this.user={uid: res.uid, email: res.email, displayName:res.displayName}));

  }


  getCursosAprobados() {
    this.cursos = this.cursos_aprobados_service.getCursosAprobados();  //guardamos todo lo de esa collection en este arreglo
  }

  //METODO PARA OBTENER TODOS LOS CURSOS APROBADOS DE CADA CARNET
  async getAprobados() {

    this.cursos_aprobados_service.getCursosAprobados2().subscribe(async res1 => {
      //  console.log("LA LONGITUD ES "+res1.length)
      for (let i = 0; i < res1.length; i++) {
        this.array2.push(res1[i].payload.doc.data())
      }


      let response = this.userService.getCurrentUser().then(function (firebaseUser) {
        console.log("Encontrado!");
        return firebaseUser;
      });
      const observable = from(response);
      const user = await observable.toPromise();
      console.log(user.uid);

      for (let j = 0; j < this.array2.length; j++) {





        if (this.array2[j].carnetEstudiante == user.uid) {
                 console.log("ENTRE AL FOR")
          for (let k = 0; k < this.array2[j].cursosAprobados.length; k++) {
            this.array3.push(this.array2[j].cursosAprobados[k]);

          }

        }

      }
      // console.log("EL ARRAY DE APROBADOS 2 " + this.array2[0].carnetEstudiante);


    });

  }


async getTodos2(){
console.log("DENTRO DE GET TODOS 2")
  let cursos=await this.cursos_aprobados_service.getTodos().toPromise()

  console.log(cursos)
  for (let i = 0; i < cursos.length; i++) {
    this.array1.push(cursos[i].payload.doc.data())
  }
  console.log("EL ARRAY ES " + this.array1[2].nombre);


 }


  getTodos() {

    //console.log("ENTRE A GET TODOS")


    this.cursos_aprobados_service.getTodos().subscribe(res1 => {
     
      for (let i = 0; i < res1.length; i++) {
        this.array1.push(res1[i].payload.doc.data())
      }
      console.log("EL ARRAY ES " + this.array1[2].nombre);


      for (let i = 0; i < this.array3.length; i++) {
        console.log("QUE PASO")
        for (let j = 0; j < this.array1.length; j++) {
          // console.log(" EL CURSO APROBADO ES "+this.cursosAprobados[i]);
          if (this.array3[i] == this.array1[j].codigo) {
            this.array4.push(this.array1[j]);
          }

        }

      }

      //--------PARA LLENAR LOS PENDIENTES-----------
     /* for (let i = 0; i < this.array3.length; i++) {
        console.log("DENTRO")
        for (let j = 0; j < this.array1.length; j++) {
          // console.log(" EL CURSO APROBADO ES "+this.cursosAprobados[i]);
          if (this.array3[i] == this.array1[j].codigo) {
       //     this.array1.
          }

        }

      }*/



    });
    //  let array1=[];

    //this.todos = this.cursos_aprobados_service.getTodos();  //guardamos todo lo de esa collection en este arreglo
  }



  getTodos3() {

    //console.log("ENTRE A GET TODOS")

    this.cursos_aprobados_service.getCursosAprobados2().subscribe(async res2 => { 
    this.cursos_aprobados_service.getTodos().subscribe(async res1 => {
     
//PARTE 1--------------

 //  console.log("LA LONGITUD ES "+res1.length)
 for (let i = 0; i < res2.length; i++) {
  this.array2.push(res2[i].payload.doc.data())
}


let response = this.userService.getCurrentUser().then(function (firebaseUser) {
  console.log("Encontrado!");
  return firebaseUser;
});
const observable = from(response);
const user = await observable.toPromise();
console.log(user.uid);

for (let j = 0; j < this.array2.length; j++) {





  if (this.array2[j].carnetEstudiante == user.uid) {
           console.log("ENTRE AL FOR")
    for (let k = 0; k < this.array2[j].cursosAprobados.length; k++) {
      this.array3.push(this.array2[j].cursosAprobados[k]);

    }

  }

}





//-------------------







      for (let i = 0; i < res1.length; i++) {
        this.array1.push(res1[i].payload.doc.data())
      }
      console.log("EL ARRAY ES " + this.array1[2].nombre);


      for (let i = 0; i < this.array3.length; i++) {
        console.log("QUE PASO SI ENTRE")
        for (let j = 0; j < this.array1.length; j++) {
          // console.log(" EL CURSO APROBADO ES "+this.cursosAprobados[i]);
          if (this.array3[i] == this.array1[j].codigo) {
            this.array4.push(this.array1[j]);
          }

        }

      }


      console.log(this.array1)
    
      for (let i = 0; i < this.array3.length; i++) {
        console.log("QUE PASO SI ENTRE")
        for (let j = 0; j < this.array1.length; j++) {
          // console.log(" EL CURSO APROBADO ES "+this.cursosAprobados[i]);
          if (this.array3[i] == this.array1[j].codigo) {
            console.log("VOY A BORRAR")
            this.array1.splice( j, 1 );
            break;
           // this.removeItemFromArr(this.array1,j);
          }

        }

      }
        
         console.log(this.array1)
      //--------PARA LLENAR LOS PENDIENTES-----------
     /* for (let i = 0; i < this.array3.length; i++) {
        console.log("DENTRO")
        for (let j = 0; j < this.array1.length; j++) {
          // console.log(" EL CURSO APROBADO ES "+this.cursosAprobados[i]);
          if (this.array3[i] == this.array1[j].codigo) {
       //     this.array1.
          }

        }

      }*/



    });
  } );
    //  let array1=[];

    //this.todos = this.cursos_aprobados_service.getTodos();  //guardamos todo lo de esa collection en este arreglo
  }

   removeItemFromArr ( arr, item ) {
    var i = arr.indexOf( item );
 
    if ( i !== -1 ) {
        arr.splice( i, 1 );
    }
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

  public guardarCursosAprobados() {
    this.cursos_aprobados_service.addCurso({id: this.user.uid, carnetEstudiante: this.user.uid, cursosAprobados: this.cursosAprobados})
  }

}
