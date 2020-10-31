import { Component } from '@angular/core';
import { User } from '../shared/user.interface'
import { UserService } from '../services/user.service';
import { forkJoin, from, VirtualTimeScheduler } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: User = { uid: '', email: '', displayName: '' };
  esAdmin: Boolean = true;
  constructor(private router: Router,private userService: UserService) {


  }

  async ngOnInit() {
    let bool=await this.userService.esAdmin();


  }

  cargaMasiva(){
    let bool=JSON.parse(localStorage.getItem('esAdmin'))
    console.log('retorno',bool)
    if(bool==true){
      this.router.navigateByUrl('/home/carga-masiva');
    } 
  }


  estudiante(ruta){
    let bool=JSON.parse(localStorage.getItem('esAdmin'))
    console.log('retorno',bool)
    if(bool==false){
      this.router.navigateByUrl(ruta);
    } 
  }

}
