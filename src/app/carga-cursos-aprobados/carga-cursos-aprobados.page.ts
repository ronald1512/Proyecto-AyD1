import { Component, OnInit } from '@angular/core';
import { CursosAprobados} from './services/cursos-aprobados.interface';
import { CursosAprobadosService } from './services/cursos-aprobados.service';
import { ActivatedRoute} from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { forkJoin, from, VirtualTimeScheduler } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { User } from '../shared/user.interface';
//import { AngularFireAuth, } from '@angular/fire/auth';

@Component({
  selector: 'app-carga-cursos-aprobados',
  templateUrl: './carga-cursos-aprobados.page.html',
  styleUrls: ['./carga-cursos-aprobados.page.scss'],
})
export class CargaCursosAprobadosPage implements OnInit {
  user: User= {uid:'', email:'', displayName:''};   //aqui voy a tener los datos del usuario actual
  curso:CursosAprobados={
    correoEstudiante:"",
    cursosAprobados:[]
    };

    idDocumento:string="";

  constructor(private userService: UserService, private cursoService: CursosAprobadosService, private loadingController: LoadingController) { }

  ngOnInit() {
    let response = this.userService.getCurrentUser().then(function (firebaseUser) {
      console.log("Encontrado!");
      return firebaseUser;
    });
    const observable= from(response);
    observable.subscribe(res => (this.user={uid: res.uid, email: res.email, displayName:res.displayName}));
  }





  file: File;
 changeListener($event) : void {
   
    this.file = $event.target.files[0];
    let lector = new FileReader();
    lector.readAsText(this.file);

    lector.onloadend = (s) => {
      let text: string = lector.result as string;
      
      this.chargeFile(text)
    };
  }


  chargeFile(text:String){
   
    //Falta agregar carnet obtenido de LocalStorage
    //console.log(this.auth.currentUser)
      
      this.curso={correoEstudiante:this.user.email, cursosAprobados:[]};  //el uid es el identificador para cada usuario

      var cursos=CargaCursosAprobadosPage.separarCadena(text);

      for(let i=0;i<cursos.length;i++){
        if(cursos[i]!=""&&cursos[i]!=undefined){
          this.curso.cursosAprobados.push(cursos[i]);
        }
      }

      this.crearCurso(this.curso);
      //this.comprobarExistencia();
   
  }

  public static separarCadena(texto:String):string[]{
    return texto.split(';');
  }

  async crearCurso(curso:CursosAprobados) {
    const loading = await this.loadingController.create({
      message: 'Cargando cursos aprobados'
    });
    await loading.present();
    loading.dismiss();
    this.cursoService.addCurso(curso)
    
  }


  obtenerCursos(){
    this.cursoService.getCursos().subscribe(res =>{
      console.log("Datos: ")
      console.log(res)
    });
  }

  /*comprobarExistencia(){
    this.cursoService.getCursos().subscribe(async res=>{
      var bool1=false;
      this.curso.correoEstudiante="201709155"
      //Cambiar el carnet quemado por el carnet del usuario logueado
      for(let i=0;i<res.length;i++){
        if(res[i].correoEstudiante=="201709155"){
          bool1=true;
          break;
        }
      }

      if(bool1==true){
        console.log("entra2")
      }else{
        console.log("entraaaaaaaaa")
      const loading = await this.loadingController.create({
      message: 'Cargando cursos aprobados'
    });
      await loading.present();
      loading.dismiss();
      this.cursoService.addCurso(this.curso)
      }

    });
    
  
  }*/

}
