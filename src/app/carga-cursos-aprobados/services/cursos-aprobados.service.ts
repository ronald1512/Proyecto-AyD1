import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Curso } from './curso.interface';
import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CursosAprobadosService {

  private Collection: AngularFirestoreCollection<Curso>;
  private cursos: Observable<Curso[]>;

  constructor(db:AngularFirestore) { 
    if(db){
      this.Collection = db.collection<Curso>('cursos');
      this.cursos = this.Collection.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id, ...data};
          });
        })
      );
    }
  }


  getCursos(){
    return this.cursos;
  }

  getCollection(){
    return this.Collection;
  }

  getCurso(id: string){
    return this.Collection.doc<Curso>(id).valueChanges();
  }

  updateTodo(curso:Curso, id: string){
    return this.Collection.doc(id).update(curso);
  }
  
  addCurso(curso: Curso){
    return this.Collection.add(curso);
  }
  
  removeTodo(id: string){
    return this.Collection.doc(id).delete();
  }  
}
