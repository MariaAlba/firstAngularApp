import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  titulo:string;
  numClick:number;
  visible :boolean;

  constructor() {
    console.trace('Constructor');

    this.titulo = "Welcome to Hell";
    this.numClick = 0;
    this.visible = false;

   }//Constructor

  ngOnInit() {
    console.trace('ngOnInit')


  }//ngOnInit 


  contarClicks(){
    console.trace('contar click');
    this.numClick++;
  }// contarClicks


  decirAdios() {   
    console.trace('decir adios'); 
    this.visible = true;  
  } //decorAdios

}//inicio componente
