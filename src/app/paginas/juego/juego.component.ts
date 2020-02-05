import { Component, OnInit } from '@angular/core';

const TIEMPO = 2000;

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})
export class JuegoComponent implements OnInit {

  jugador: string;
  puntos:number;
  ranking:Map<string,number>;
 
  deshabilitado:boolean;
  

  constructor() { 
    console.trace(' JuegoComponent constructor');
    this.jugador = '';
    this.puntos = 0;
    this.ranking = new Map();
    
    this.deshabilitado = true;
  } //constructor

  ngOnInit() {
    this.ranking = this.ranking;
    console.trace('onInit')
  } //ngOnInit

  startGame(jugador):void{
    
    console.trace('startGame',jugador);
    
    this.deshabilitado = false;
    
    
    setTimeout( ()=>{
      console.debug('termina TIMEOUT');
      this.deshabilitado=true;
      this.ranking.set(this.jugador,this.puntos);
      this.puntos = 0;
      this.jugador = '';
     
    },TIEMPO);
  
  }//startGame

  sumarPuntos():void{
    console.trace('sumarpuntos');
    this.puntos++;   
  }


}
