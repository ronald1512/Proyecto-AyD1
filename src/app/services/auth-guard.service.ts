import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private serviciousuario: UserService) { }
  
  canActivate(route: ActivatedRouteSnapshot): boolean {
    console.log(route);
    return this.serviciousuario.esAdmin();
  }
}
