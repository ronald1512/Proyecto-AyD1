import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Nota } from './nota';

@Component({
  selector: 'app-notas-personales',
  templateUrl: './notas-personales.page.html',
  styleUrls: ['./notas-personales.page.scss'],
})
export class NotasPersonalesPage implements OnInit {

  notas: Nota[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.notas.push(
      {
        titulo: "nota1",
        carnetEstudiante: "201709155",
        fecha: "12/10/2020",
        contenido: "Primera Nota"
      }
    );

    this.notas.push(
      {
        titulo: "nota2",
        carnetEstudiante: "201709155",
        fecha: "12/10/2020",
        contenido: "Segunda Nota"
      }
    );

    this.notas.push(
      {
        titulo: "nota3",
        carnetEstudiante: "201709155",
        fecha: "12/10/2020",
        contenido: "Terrcera Nota"
      }
    );


  }

  nuevaNota() {
    this.router.navigate(['/notas-personales/nueva-nota']);
  }

  mostrarNota(obj){
    console.log(obj)
    localStorage.setItem("nota",JSON.stringify(obj));
    this.router.navigate(['/notas-personales/ver-nota']);

  }

}
