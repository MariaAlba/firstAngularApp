import { Injectable } from '@angular/core';
import { IUsuarioService } from './IUsuarioService';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService implements IUsuarioService {

  
  private isLogged:boolean;
  private usuario:Usuario;

  constructor() { 
    console.trace('UsuarioService constructor');
    this.isLogged = false;
    this.usuario = undefined;

  } //constructor
  
  estaLogeado(): boolean {
    console.trace('estaLogeado');
    return this.isLogged;
  }
  
  /**
   * Busca usuario por nombre y pass
   * @param nombre 
   * @param password 
   * @return usuario si existe, undefined si no existe
   */
  login(nombre: string, password: string):Usuario {
    console.trace('login',nombre,password);

    const NOMBRE = 'admin';
    const PASS = 'admin';
    
    let usuarioBuscar:Usuario;
    
    //si no entra en if es undefined
    if(NOMBRE === nombre && PASS == password){
      usuarioBuscar = new Usuario();
      usuarioBuscar.nombre = nombre;
      usuarioBuscar.password = password;
      usuarioBuscar.id = 99;
      
      //marcar que esta logeado
      this.isLogged = true;
    }else{
      console.trace('usuario no encontrado');
      this.isLogged = false;
    }

    return usuarioBuscar;
  }
  cerrarSesion(): void {
    console.trace('cerrarSesion');
    this.isLogged = false;
  }

}//UsuarioService
