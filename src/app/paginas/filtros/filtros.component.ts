import { Component, OnInit } from '@angular/core';
import {ANIMALES} from '../../const/animales';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {

  coche:any;
  animales :Array<any>;
  tipos:Array<string>;


  constructor() { 
    console.trace(`FiltrosComponent constructor`);
    this.animales = ANIMALES;
    this.tipos = this.animales.map((el,index,cur)=>{

     return el.Tipo;
     
    });

    let unique_Tipos = [...new Set(this.tipos)]
    console.log('Tipos',unique_Tipos);
    this.coche = {
                    "nombre": "Audi r8",
                    "color":"blanco",
                    "isDiesel":false,
                    "precio":100000.456
                  };


  }//constructor

  ngOnInit() {
    console.trace(`FiltrosComponent ngOnInit`);

  }//ngOnInit


}//FiltrosComponent
