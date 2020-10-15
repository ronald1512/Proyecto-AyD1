import { Component, OnInit } from '@angular/core';
import { Nota } from '../nota';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ver-nota',
  templateUrl: './ver-nota.page.html',
  styleUrls: ['./ver-nota.page.scss'],
})
export class VerNotaPage implements OnInit {

  nota: Nota = {
    titulo: "",
    uid: "",
    contenido: ""
  };

  constructor(private toastController: ToastController) { }

  ngOnInit() {
    this.nota=JSON.parse(localStorage.getItem('nota'));
  }

  guardarNota() {
    console.log('Guardar nota...');
  }

  


}
