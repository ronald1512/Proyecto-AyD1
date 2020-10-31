import { Component, OnInit } from '@angular/core';
import { Curso} from './curso.interface';
import { CargamasivaService } from './services/cargamasiva.service';
import { ActivatedRoute} from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-cargamasiva',
  templateUrl: './cargamasiva.page.html',
  styleUrls: ['./cargamasiva.page.scss'],
})
export class CargamasivaPage implements OnInit {

  curso:Curso={
    codigo:"",
    nombre:"",
    cursospre:[],
    creditos:"",
    creditospre:""
  };

  constructor(private userService: UserService,private route: ActivatedRoute, private nav: NavController, private cursoService: CargamasivaService, private loadingController: LoadingController,private router: Router) { }

  async ngOnInit() {
    let bool=await this.userService.esAdmin();

    if(bool==false) this.router.navigateByUrl('/home/perfil');
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
    var lineasCursos=text.split("\n");
    for(let i=0;i<lineasCursos.length;i++){
      
      this.curso={codigo:"",nombre:"",cursospre:[],creditos:"",creditospre:""};

      var camposCursos=lineasCursos[i].split(";");

      if(lineasCursos[i]!=""&&lineasCursos[i]!=undefined){

          this.curso.codigo=camposCursos[0];
          this.curso.nombre=camposCursos[1];

          var splitCursos=camposCursos[2].split("/");
          
         

          for(let z=0;z<splitCursos.length;z++){
            if(splitCursos[z]!=""&&splitCursos[z]!=undefined){
              this.curso.cursospre.push(splitCursos[z]);
            }
          }

          this.curso.creditos=camposCursos[3];
          this.curso.creditospre=camposCursos[4]

          this.crearCurso(this.curso);

        }

    }
  }


  
//codigo;nombre;cursos-pre-requisitos;creditos;creditos-pre-requisito?
//1;mate2;mate1/social1/tecinas1;123



  async crearCurso(curso:Curso) {
    console.log(curso)
    const loading = await this.loadingController.create({
      message: 'Cargando cursos'
    });
    await loading.present();
    this.cursoService.addCurso(curso,loading);
    
  }

}



