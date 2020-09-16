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

  comparacionCursos(arreglo1:any[],arreglo2:any[]){
    
  }

}
