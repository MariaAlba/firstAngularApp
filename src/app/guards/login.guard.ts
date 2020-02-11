import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router:Router, private usuarioService: UsuarioService){
    console.debug('LoginGuard constructor');
  }//constructor

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    
    console.debug('CanActivate');

    const logeado:boolean = this.usuarioService.estaLogeado();
    //TODO si el usuario no se ha logeado false, en caso contrario true
    //TODO crear provider o login de usuario
    //TODO servicio REST contra MYSQL 200=>existe 404=>no existe

    if(!logeado){
      this.router.navigate(['login']);//TODO Cambiar por login
    }
    
      
    return logeado;
  }//CanActivate
  
}
