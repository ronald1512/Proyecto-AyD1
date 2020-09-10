import { Component, OnInit } from '@angular/core';
import { CursosAprobados} from './services/cursos-aprobados.interface';
import { CursosAprobadosService } from './services/cursos-aprobados.service';
import { ActivatedRoute} from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { forkJoin, VirtualTimeScheduler } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
//import { AngularFireAuth, } from '@angular/fire/auth';

@Component({
  selector: 'app-carga-cursos-aprobados',
  templateUrl: './carga-cursos-aprobados.page.html',
  styleUrls: ['./carga-cursos-aprobados.page.scss'],
})
export class CargaCursosAprobadosPage implements OnInit {

  curso:CursosAprobados={
    carnetEstudiante:"",
    cursosAprobados:[]
    };

    idDocumento:string="";

  constructor(private route: ActivatedRoute, private nav: NavController, private cursoService: CursosAprobadosService, private loadingController: LoadingController) { }

  ngOnInit() {
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
      
      this.curso={carnetEstudiante:"", cursosAprobados:[]};

      var cursos=text.split(";");

      for(let i=0;i<cursos.length;i++){
        if(cursos[i]!=""&&cursos[i]!=undefined){
          this.curso.cursosAprobados.push(cursos[i]);
        }
      }

      this.crearCurso(this.curso);
      //this.comprobarExistencia();
   
  }

  async crearCurso(curso:CursosAprobados) {
    console.log("entraaaaaaaaa")
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
      this.curso.carnetEstudiante="201709155"
      //Cambiar el carnet quemado por el carnet del usuario logueado
      for(let i=0;i<res.length;i++){
        if(res[i].carnetEstudiante=="201709155"){
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
