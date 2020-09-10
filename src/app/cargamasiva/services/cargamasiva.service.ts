import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Curso } from '../curso.interface';
import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class CargamasivaService {

  constructor(private firestore: AngularFirestore) { 
  }


  getCursos(){
    return this.firestore.collection("cursos").snapshotChanges();
  }


  getCurso(id: string){
    //return this.Collection.doc<Curso>(id).valueChanges();
    return null;
  }

  updateTodo(curso:Curso, id: string){
    //return this.Collection.doc(id).update(curso);
    return null;
  }
  
  addCurso(curso: Curso, loading:any){
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("cursos")
        .add(curso)
        .then(res => {loading.dismiss();}, err => reject(err));
    });
  }
  

}
