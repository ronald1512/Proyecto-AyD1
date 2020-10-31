import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Nota } from './nota';
import { from } from 'rxjs';
import { User } from '../models/user.interface';
import { ServicioNotasService } from './service/servicio-notas.service';

@Component({
  selector: 'app-notas-personales',
  templateUrl: './notas-personales.page.html',
  styleUrls: ['./notas-personales.page.scss'],
})
export class NotasPersonalesPage implements OnInit {

  user: User= {uid:'', email:'', displayName:'', rol: 'estudiante'};
  notas: Nota [] = [];

  constructor(
    private router: Router,
    private servicio: ServicioNotasService,
  ) { }

  async ngOnInit() {
    let uid = await this.servicio.getUsuario();
    console.log('Recuperando notas del uid: ', uid);
    this.notas = await this.servicio.getNotas(uid);
    console.log(this.notas);
  }

  usuarioRegistrado(){
    return this.servicio.getUsuario();
  }
  
  getNotas(){
    return this.servicio.getNotas('123'); 
  }

  nuevaNota() {
    this.router.navigate(['/notas-personales/nueva-nota']);
  }

  mostrarNota(obj){
    console.log(obj)
    localStorage.setItem("nota",JSON.stringify(obj));
    this.router.navigate(['/notas-personales/ver-nota']);
  }
  
  isSaved():boolean{
    return !!localStorage.getItem('nota');
  }

}
