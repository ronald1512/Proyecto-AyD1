import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CursosAprobados } from './cursos-aprobados.interface';
import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';
import { Cursos_aprobados } from 'src/app/shared/cursos-aprobados.interface';

@Injectable({
  providedIn: 'root'
})
export class CursosAprobadosService {

  constructor(private firestore: AngularFirestore) { 
    
  }


  getCursos(){
    return this.firestore.collection("cursos-aprobados").snapshotChanges();
  }

  getTodos(){
    return this.firestore.collection("cursos").snapshotChanges();
  }


  getCurso(id: string){
    //return this.Collection.doc<CursosAprobados>(id).valueChanges();
    return null;
  }

  updateCurso(curso:CursosAprobados, id: string){
    //return this.Collection.doc(id).update(curso);
    return null;
  }
  
  addCurso(curso: CursosAprobados){
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("cursos-aprobados")
        .add(curso)
        .then(res => {}, err => reject(err));
    });
  }

  getCursosAprobados() { 
    //return this.firestore.collection("cursos-aprobados").snapshotChanges();

    let usersCollection: AngularFirestoreCollection<Cursos_aprobados>;
    let cursos: Array<Cursos_aprobados> = [];

    usersCollection = this.firestore.collection('cursos-aprobados'); 
    usersCollection.snapshotChanges().forEach( a => {
      a.forEach( item => {
        cursos.push({carnetEstudiante: item.payload.doc.data().carnetEstudiante, cursosAprobados:item.payload.doc.data().cursosAprobados});
      });
    });

    return cursos;

  }
  
  getCursosAprobados2() { 
  return  this.firestore.collection('cursos-aprobados').snapshotChanges(); 

  }
 
}
