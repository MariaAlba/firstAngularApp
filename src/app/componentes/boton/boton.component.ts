import { Component, OnInit } from '@angular/core';
import { ResolveStart } from '@angular/router';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent implements OnInit {


  //declarar variables
  numero:number

  constructor() { 
    console.trace('Constructor de ComponenteBoton');
    //inicializar variables
    this.numero = 0;
  }

  ngOnInit() {
    console.trace('botonComponent ngOnInit');
    //con este evento nos sirve para hacer llamadas a servicios rest
  }

  //declarar funciones

  sumaResta = (numero) => {

    let decremento=false;
    
    numero++;
  
    this.numero = numero;
    
    
    if(this.numero > 10 && decremento==false){decremento = true;}
    
    
    if(decremento==true){}
    
    console.log('sumaResta',decremento,this.numero);


  }

 



}
