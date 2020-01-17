import { Component } from '@angular/core';

// componente principal  que se carga al arrancar la app


/*
  @Component es la forma de declarar un componente (se llama decorador)
    selector :    nombre de la etiqueta para inyectar el componente en html
    templateUrl:  vista de HTML
    styleUrls:    estilos de la vista formato scss 
  */
@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// title es una variable
export class AppComponent {
  title = 'my-app';
}
