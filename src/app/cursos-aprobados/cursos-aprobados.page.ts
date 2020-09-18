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
     this.cursos_aprobados.push(codigo)
     this.toastCtrl.create({
       header: 'Cursos Aprobados',
       message: 'Curso agregado a aprobados',
       position: 'bottom',
       duration: 2000,
       animated: true
     }).then((obj) => {
       obj.present();
     });
    }else{
      this.toastCtrl.create({
        header: 'Ocurrio un error!',
        message: 'No se ha podido agregar el curso',
        position: 'bottom',
        duration: 2000,
        animated: true
      }).then((obj) => {
        obj.present();
      });
    }
  }

  public codigoCursoValido(codigo){
    return !isNaN(codigo)
  }

}
