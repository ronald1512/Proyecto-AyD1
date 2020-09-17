import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos-aprobados',
  templateUrl: './cursos-aprobados.page.html',
  styleUrls: ['./cursos-aprobados.page.scss'],
})
export class CursosAprobadosPage implements OnInit {
  lista:Array<any>=[
{
codigo:"017",
nombre:"Social Humanistica 1"


}
,{
  codigo:"101",
  nombre:"Matematica basica 1"
  
  
  }
  ,{
    codigo:"069",
    nombre:"Tecnica Complementaria 1"
    
    
    }

  ]


  
  constructor() { }

  ngOnInit() {
    
  }

  obtenerdatoscurso(codigo:String,nombre:String):void{
    console.log("EL CODIGO ES "+codigo+" Y EL NOMBRE ES "+nombre);
  }

  public validarCodigoCurso(codigo){
    return isNaN(codigo)
  }

}
