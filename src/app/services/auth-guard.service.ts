import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }
  
  canActivate(route: ActivatedRouteSnapshot): boolean {
    
    console.log(route);
    return false;

  }
}
