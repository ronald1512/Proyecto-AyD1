import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class RecuperarserviceService {

  constructor(private firestore: AngularFirestore,private afAuth?: AngularFireAuth) { }


  
  obtenerusuarios(){
    return this.firestore.collection("users").snapshotChanges();
  }

  recuperarpass(email){
this.afAuth.sendPasswordResetEmail(email).then(function(){
alert("SE ENVIO UN CORREO A SU CUENTA")

},function(error){
alert("ocurrio un error")
})

    
  }
}
