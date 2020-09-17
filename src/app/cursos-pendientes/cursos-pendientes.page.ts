import { Component, OnInit } from '@angular/core';
import {CursosPendientesService} from './service/cursos-pendientes.service'
import {Curso} from '../cargamasiva/curso.interface'
import {CursosAprobados} from '../carga-cursos-aprobados/services/cursos-aprobados.interface'


@Component({
  selector: 'app-cursos-pendientes',
  templateUrl: './cursos-pendientes.page.html',
  styleUrls: ['./cursos-pendientes.page.scss'],
})
export class CursosPendientesPage implements OnInit {
  aprobados:CursosAprobados;
  arreglo:[]
  constructor(private servicio:CursosPendientesService) { }

  ngOnInit() {
    this.verificarCursos() 
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
        console.log(tmp)
      })
    })
  }



}
