import { Component, OnInit } from '@angular/core';
import{RUTAS} from '../../const/rutas';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  //TODO declarar array para hacer for [ruta,titulo,icono] para hacer for luego
  rutas:Array<any>;

  constructor(private usuarioService:UsuarioService, private router:Router) { 
    console.trace('NavBarComponent constructor');
    this.rutas = RUTAS;
  }//constructor

  ngOnInit() {
  }//ngoninit

  salir(){
    console.trace('NAvbarComponent click boton cerrar sesión');
    const mensaje = '¿Seguro que desea cerrar sesión?';
    if(confirm(mensaje)){
      this.usuarioService.cerrarSesion();
      this.router.navigate(['/']); //ir a inicio
    }
  }
}
