import { Component, OnInit } from '@angular/core';
import { CursosAprobados} from './services/cursos-aprobados.interface';
import { CursosAprobadosService } from './services/cursos-aprobados.service';
import { ActivatedRoute} from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';


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
      
      this.curso={carnetEstudiante:"", cursosAprobados:[]};

      var cursos=text.split(";");

      for(let i=0;i<cursos.length;i++){

        if(cursos[i]!=""&&cursos[i]!=undefined){

          this.curso.cursosAprobados.push(cursos[i]);
          this.crearCurso(this.curso);

        }

      }

   
  }

  async crearCurso(curso:CursosAprobados) {
    console.log(curso)
    const loading = await this.loadingController.create({
      message: 'Cargando cursos'
    });
    await loading.present();
    this.cursoService.addCurso(curso).then(() => {
       loading.dismiss();
    });
    
  }

}
