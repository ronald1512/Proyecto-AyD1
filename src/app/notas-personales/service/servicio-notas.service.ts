import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class ServicioNotasService {
  constructor(private firestore: AngularFirestore) {}

  getNotas() {
    return this.firestore.collection("notas-personales").snapshotChanges();
  }

  async getNota(docId: string) {
    let document = await this.firestore.doc(docId).get().toPromise();
    return document.data();
  }

  /*comparacionCursos(arreglo1: any[], arreglo2: any[]): any[] {
    //Arreglo1 = arreglo cursos de sistemas
    //Arreglo2= arreglo de cursos aprobados
    let booleano = 0;
    let retorno = [];

    for (let i = 0; i < arreglo1.length; i++) {
      for (let j = 0; j < arreglo2.length; j++) {
        if (arreglo1[i].codigo == arreglo2[j]) {
          booleano = 1;
          break;
        }
      }

      if (booleano == 0) {
        retorno.push(arreglo1[i]);
      } else {
        booleano = 0;
      }
    }

    return retorno;
  }*/

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
