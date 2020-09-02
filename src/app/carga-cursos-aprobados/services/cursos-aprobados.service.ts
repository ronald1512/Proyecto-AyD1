import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CursosAprobados } from './cursos-aprobados.interface';
import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CursosAprobadosService {

  private Collection: AngularFirestoreCollection<CursosAprobados>;
  private cursos: Observable<CursosAprobados[]>;

  constructor(db:AngularFirestore) { 
    if(db){
      this.Collection = db.collection<CursosAprobados>('cursos-aprobados');
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
    return this.Collection.doc<CursosAprobados>(id).valueChanges();
  }

  updateTodo(curso:CursosAprobados, id: string){
    return this.Collection.doc(id).update(curso);
  }
  
  addCurso(curso: CursosAprobados){
    return this.Collection.add(curso);
  }
  
  removeTodo(id: string){
    return this.Collection.doc(id).delete();
  }  
}
