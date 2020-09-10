import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CursosAprobados } from './cursos-aprobados.interface';
import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CursosAprobadosService {

  constructor(private firestore: AngularFirestore) { 
    
  }


  getCursos(){
    return this.firestore.collection("cursos-aprobados").snapshotChanges();
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
  
 
}
