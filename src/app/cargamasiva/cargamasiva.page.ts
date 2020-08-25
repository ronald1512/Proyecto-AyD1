import { Component, OnInit } from '@angular/core';
import { Curso} from './curso.interface';
import { CargamasivaService } from './services/cargamasiva.service';
import { ActivatedRoute} from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-cargamasiva',
  templateUrl: './cargamasiva.page.html',
  styleUrls: ['./cargamasiva.page.scss'],
})
export class CargamasivaPage implements OnInit {

  curso:Curso={
    codigo:"",
    nombre:"",
    creditos:""
  };

  constructor(private route: ActivatedRoute, private nav: NavController, private cursoService: CargamasivaService, private loadingController: LoadingController) { }

  ngOnInit() {
  }

  file: File;
 changeListener($event) : void {
    this.file = $event.target.files[0];
    let lector = new FileReader();
    lector.readAsText(this.file);

    lector.onloadend = (s) => {
      let text: string = lector.result as string;
      console.log(text);
      this.chargeFile(text)
    };
  }


  chargeFile(text:String){
    var lineasCursos=text.split("\n");
    for(let i=0;i<lineasCursos.length;i++){
      
      this.curso={codigo:"",nombre:"",creditos:""};

      var camposCursos=lineasCursos[i].split(";");
        if(lineasCursos[i]!=""&&lineasCursos[i]!=undefined){
          this.curso.codigo=camposCursos[0];
          this.curso.nombre=camposCursos[1];
          this.curso.creditos=camposCursos[2];
          console.log("------------------")
          console.log(camposCursos[0])
          console.log(camposCursos[1])
          console.log(camposCursos[2])
          console.log("------------------")

          this.crearCurso(this.curso);

        }

    }
  }

  async crearCurso(curso:Curso) {
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
