import { Component, OnInit } from '@angular/core';
import {CursosPendientesService} from './service/cursos-pendientes.service'
import {Curso} from '../cargamasiva/curso.interface'
import {CursosAprobados} from '../carga-cursos-aprobados/services/cursos-aprobados.interface'
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-cursos-pendientes',
  templateUrl: './cursos-pendientes.page.html',
  styleUrls: ['./cursos-pendientes.page.scss'],
})
export class CursosPendientesPage implements OnInit {
  aprobados:CursosAprobados;
  arregloCursos:Curso[]=[];
  
  curso:Curso={
    codigo:"",
    nombre:"",
    cursospre:[],
    creditos:"",
    creditospre:""
  };
  constructor(private servicio:CursosPendientesService,public toastController: ToastController) { }

  ngOnInit() {
    this.verificarCursos() 
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }

  async presentToastWithOptions(codigo) {

    let cursoR=await  this.buscarCurso(codigo);

    const toast = await this.toastController.create({
      header: 'Codigo Curso: '+codigo,
      message: 'Nombre Curso: '+cursoR.nombre+'\n Creditos: '+cursoR.creditos,
      position: 'top',
      buttons: [
        {
          text: 'Cerrar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.mode="md";
    toast.color="dark";
    toast.present();
  }



  async buscarCurso(codigo){

    for(let i=0;i<this.arregloCursos.length;i++){
      if(this.arregloCursos[i].codigo==codigo){
        return this.arregloCursos[i];
      }
    }
    return null;
  }

  
  verificarCursos(){
    this.servicio.obtenerCursos().subscribe(res1=>{
      this.servicio.obtenerCursosAprobados().subscribe(res2=>{

        let array1=[];
        let array2=[];
        let array3=[];
        
        for(let i=0;i<res1.length;i++){
          array1.push(res1[i].payload.doc.data())
        }
        
        for(let i=0;i<res2.length;i++){
          array2.push(res2[i].payload.doc.data())
        }
        



        for(let i=0;i<array2.length;i++){
          //if(array2[i].carnetEstudiante==this.carnet){
            for(let j=0;j<array2[0].cursosAprobados.length;j++){
              array3.push(array2[0].cursosAprobados[j])
            }
          //}
        }

        let tmp=this.servicio.comparacionCursos(array1,array3)
        
        for(let z=0;z<tmp.length;z++){
          this.curso={
            codigo:"",
            nombre:"",
            cursospre:[],
            creditos:"",
            creditospre:""
          };
          this.curso.codigo=tmp[z].codigo;
          this.curso.nombre=tmp[z].nombre;
          this.curso.cursospre=tmp[z].cursospre;
          this.curso.creditos=tmp[z].creditos;
          this.curso.creditospre=tmp[z].creditospre;


          this.arregloCursos.push(this.curso);

        }
        console.log(this.arregloCursos);


      })
    })
  }



}
