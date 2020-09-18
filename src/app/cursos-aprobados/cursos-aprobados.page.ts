import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

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

  private cursos_aprobados: string[] = [];
  
  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {
    
  }

  obtenerdatoscurso(codigo: string,nombre:String):void{
    if(this.codigoCursoValido(codigo)){
     
    }else{
      
    }
  }

  public codigoCursoValido(codigo){
    return !isNaN(codigo)
  }

}
