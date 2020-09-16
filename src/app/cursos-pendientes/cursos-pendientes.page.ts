import { Component, OnInit } from '@angular/core';
import {CursosPendientesService} from './service/cursos-pendientes.service'
@Component({
  selector: 'app-cursos-pendientes',
  templateUrl: './cursos-pendientes.page.html',
  styleUrls: ['./cursos-pendientes.page.scss'],
})
export class CursosPendientesPage implements OnInit {

  constructor(private servicio:CursosPendientesService) { }

  ngOnInit() {
    this.verificarCursos() 
  }

  
  verificarCursos(){
    this.servicio.obtenerCursos().subscribe(res1=>{
      this.servicio.obtenerCursosAprobados().subscribe(res2=>{
        this.servicio.comparacionCursos(res1,res2)
      })
    })
  }



}
