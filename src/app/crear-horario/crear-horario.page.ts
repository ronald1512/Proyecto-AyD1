import { Component, OnInit } from '@angular/core';
import {CrearHorarioService} from './service/crear-horario.service'
import {CursoHorario} from './service/horario'
import {Horario} from './service/horario'
import {CursosAprobados} from '../carga-cursos-aprobados/services/cursos-aprobados.interface'
import {Curso} from '../cargamasiva/curso.interface'

import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-crear-horario',
  templateUrl: './crear-horario.page.html',
  styleUrls: ['./crear-horario.page.scss'],
})
export class CrearHorarioPage implements OnInit {

  aprobados:CursosAprobados;
  arregloCursos:Curso[]=[];
  
  curso:Curso={
    codigo:"",
    nombre:"",
    cursospre:[],
    creditos:"",
    creditospre:""
  };

  constructor(private servicio:CrearHorarioService,public toastController: ToastController) { }

  ngOnInit() {
  }

  cursosDesbloqueados(){


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
