import { Component, OnInit } from '@angular/core';
import { Fruta } from 'src/app/model/frutas.model';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss']
})
export class ComprasComponent implements OnInit {

  frutaSeleccionada: Fruta;

  constructor() { 
    this.frutaSeleccionada = new Fruta();
  }

  ngOnInit() {
  }

  recogerEvento(event){
    console.debug('Soy componente padre y recojo el evento %o', event);
    this.frutaSeleccionada = event;
    }

}
