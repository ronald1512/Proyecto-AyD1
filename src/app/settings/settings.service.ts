import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Settings } from './settings.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private Collection: AngularFirestoreCollection<Settings>;
  private settings: Observable<Settings[]>;

  constructor(db: AngularFirestore) { 
    if(db){
      this.Collection = db.collection<Settings>('usuarios');
      this.settings = this.Collection.snapshotChanges().pipe(
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

  getSettings(){
    return this.settings;
  }

  getCollection(){
    return this.Collection;
  }

  getSetting(id: string){
    return this.Collection.doc<Settings>(id).valueChanges();
  }
}
