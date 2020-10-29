import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { from } from "rxjs";
import { User } from "src/app/models/user.interface";
import { UserService } from "src/app/services/user.service";
import { Nota } from "../nota";

@Injectable({
  providedIn: "root",
})
export class ServicioNotasService {
  user: User = { uid: "", email: "", displayName: "" };

  constructor(
    private firestore: AngularFirestore,
    private userService: UserService
  ) {}

  getUsuario() {
    return this.userService.getCurrentUser().then(function (firebaseUser) {
      return firebaseUser.uid;
    });
  }

  getNotas(uid) {
    let notas: Nota [] = [];

    let notasdb = this.firestore.collection("/notas-personales", (ref) =>
      ref.where("uid", "==", uid)
    );
    notasdb.snapshotChanges().forEach((a) => {
      a.forEach((item) => {
        //console.log();
        notas.push({
          titulo: JSON.parse(JSON.stringify(item.payload.doc.data())).titulo,
          contenido: JSON.parse(JSON.stringify(item.payload.doc.data())).contenido,
          uid: JSON.parse(JSON.stringify(item.payload.doc.data())).uid,
        });
        //cursos.push({carnetEstudiante: item.payload.doc.data().carnetEstudiante, cursosAprobados:item.payload.doc.data().cursosAprobados});
      });
    });
    
    return notas;
  }

  async getNota(docId: string) {
    let document = await this.firestore.doc(docId).get().toPromise();
    return document.data();
  }

  insertarNota(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("notas-personales")
        .add(data)
        .then(
          (res) => {},
          (err) => reject(err)
        );
    });
  }
}
