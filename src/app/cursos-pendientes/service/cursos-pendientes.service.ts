import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
@Injectable({
  providedIn: 'root'
})
export class CursosPendientesService {

  constructor(private firestore: AngularFirestore) { }

  lecturaArchivo():any[]{
    //Sirve para pruebas
    return[];
  }
  
  obtenerCursosAprobados(){
    return this.firestore.collection("cursos-aprobados").snapshotChanges();
  }

  obtenerCursos(){
    return this.firestore.collection("cursos").snapshotChanges();
  }

  comparacionCursos(arreglo1:any[],arreglo2:any[]):any[]{
    //Arreglo1 = arreglo cursos de sistemas
    //Arreglo2= arreglo de cursos aprobados
    let booleano=0;
    let retorno=[];
    
    for(let i=0;i<arreglo1.length;i++){
      
      for(let j=0;j<arreglo2.length;j++){

        if(arreglo1[i].codigo==arreglo2[j]){
          booleano=1;
          break;
        }    

      }

      if(booleano==0){
        retorno.push(arreglo1[i]);
      }else{
        booleano=0;
      }

    }


    return retorno;
  }

  verificarCodigoCurso (codigo: any):boolean {
    return false;
  }
  
  verificarCursos(){

  }
}
