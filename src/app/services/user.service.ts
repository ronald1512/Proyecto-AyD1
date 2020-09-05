import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private Collection: AngularFirestoreCollection<User>;
  private users: Observable<User[]>;

  constructor(db: AngularFirestore) { 
    if(db){
      this.Collection = db.collection<User>('users');
      this.users = this.Collection.snapshotChanges().pipe(
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

  updateUser(user: User, id: string){
    return this.Collection.doc(id).update(user);
  }
}
