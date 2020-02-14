import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Fruta } from 'src/app/model/frutas.model';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  @Output() pasameFrutaEvento = new EventEmitter();

  frutas: Array<Fruta>;
  frutaSeleccionada:Fruta;

  constructor() {
    this.frutas = new Array<Fruta>();
    this.frutas.push(new Fruta('manzana'));
    this.frutas.push(new Fruta('pera'));
    this.frutas.push(new Fruta('fresa'));
    this.frutaSeleccionada = new Fruta();
   }

  ngOnInit() {
  }

  seleccionarFruta(fruta:Fruta){
    console.debug('click fruta %o',fruta);
    this.frutaSeleccionada = fruta;
  }

  lanzar(event,fruta){
    console.debug('lanza evento',fruta);
    this.pasameFrutaEvento.emit(fruta);
  }



}
