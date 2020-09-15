import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosPendientesService {

  constructor() { }

  lecturaArchivo():any[]{
    //Sirve para pruebas
    return[];
  }
  
  obtenerCursosAprobados():any[]{
    return[];
  }

  comparacionCursos(arreglo1:any[],arreglo2:any[]){
    
  }

  verificarCursos(){

  }
}
