import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})
export class JuegoComponent implements OnInit {

  jugador: string;
  ranking:any;
  ranked:any;
  puntos:number;

  constructor() { 
    console.trace('constructor');
    this.jugador = '';
    this.ranked = {"nombre":"","puntos":0 };
    this.ranking = [];
    this.puntos = 0;
  } //constructor

  ngOnInit() {
    console.trace('onInit')
  } //ngOnInit

  startGame(jugador){
    console.trace('startGame',jugador);
    this.ranked.nombre=jugador;
    this.ranked.puntos = 0;
    this.ranking.push(this.ranked);

  }//startGame

  stopGame(){
    
  }//stopGame
  
  sumarPuntos(){
    console.trace('sumarpuntos');
    this.puntos++;
    setTimeout(this.stopGame,10000);
  }


}
