import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.scss']
})
export class DirectivasComponent implements OnInit {

  colorSel:string;
  
  constructor() { 
    console.trace('DirectivasComponent constructor');
    this.colorSel = "yellow";
  }//Constructor


  ngOnInit() {
  }

}//DirectivasComponent
