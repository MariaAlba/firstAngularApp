import { Component, OnInit } from '@angular/core';
import{RUTAS} from '../../const/rutas';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  //TODO declarar array para hacer for [ruta,titulo,icono] para hacer for luego
  rutas:Array<any>;

  constructor() { 
    console.trace('NavBarComponent constructor');
    this.rutas = RUTAS;
  }//constructor

  ngOnInit() {
  }//ngoninit

}
