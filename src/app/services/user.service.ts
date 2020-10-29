import { Injectable } from "@angular/core";
import { User } from "../models/user.interface";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";
import { map, first } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class UserService {
  user: User = { uid: "", email: "", displayName: "", rol: "" };

  /*
uid: string;
    email: string;
    displayName: string;
    rol: string;
  */

  constructor(
    private afAuth?: AngularFireAuth,
    private firestore?: AngularFirestore
  ) {
    /*
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
    */
  }
  getUserData() {
    //esto es para enviar todos los usuarios :)
    //return this.firestore.collection("users").snapshotChanges();

    let usersCollection: AngularFirestoreCollection<User>;
    let usuarios: Array<User> = [];

    usersCollection = this.firestore.collection("users");
    usersCollection.snapshotChanges().forEach((a) => {
      a.forEach((item) => {
        usuarios.push({
          uid: item.payload.doc.data().uid,
          email: item.payload.doc.data().email,
          displayName: item.payload.doc.data().displayName,
          rol: item.payload.doc.data().rol,
        });
      });
    });

    return usuarios;
  }

  isLoggedIn() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  getCurrentUser() {
    const user = this.isLoggedIn();
    if (user) {
      // do something
      console.log("está dentro!");
      return user;
    } else {
      // do something else
      console.log("no hay nadie dentro!");
      return undefined;
    }
  }

  updateUser(user: User, id: string) {
    //return this.Collection.doc(id).update(user);
    return this.firestore.collection("users").doc(id).update(user);
  }

  esAdmin(): boolean {

    let admin:boolean = false;

    this.getCurrentUser().then((usuarioF) => {
      if (!usuarioF) {
        admin = false;
        return;
      }
      
      let uid = usuarioF.uid;
      let usuario: AngularFirestoreCollection<User>;
      
      usuario = this.firestore.collection("/users", (ref) =>
        ref.where("uid", "==", uid)
      );
      
      usuario.snapshotChanges().forEach((a) => {
        a.forEach((item) => {
          admin = item.payload.doc.data().rol == "admin";
          console.log("admin", admin);
        });
      });
    });

    return admin;
  }
}
