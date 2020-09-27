import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
@Injectable({
  providedIn: 'root'
})
export class CrearHorarioService {

  constructor(private firestore: AngularFirestore) { }

  obtenerCursosAprobados(){
    return this.firestore.collection("cursos-aprobados").snapshotChanges();
  }
  
  obtenerHorarios(){
    return this.firestore.collection("horarios").snapshotChanges();
  }
  async getHorario(docId:string){
    let document = await this.firestore.doc(docId).get().toPromise();
    return document.data();
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

  insertar(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("horarios")
        .add(data)
        .then(res => {}, err => reject(err));
    });
  }


}
