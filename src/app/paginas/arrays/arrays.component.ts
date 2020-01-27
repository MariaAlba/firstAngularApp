import { Component, OnInit } from '@angular/core';
import { findReadVarNames } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.scss']
})
export class ArraysComponent implements OnInit {


  frutas: any;
  total: number;

  constructor() {
    console.trace('ArraysComponent constructor')
    this.frutas = [
      {"nombre":"fresa", "precio":2.45},
      {"nombre":"pera", "precio":2.50},
      {"nombre":"manzana", "precio":1.99}
    ];
 
    this.total = this.frutas.map(function(x){
      return this.total+=x.precio;
    });
  }

  ngOnInit() {
    console.trace('ArraysComponent ngOnInit')
  }

}
