import { Component, OnInit } from '@angular/core';
import {GLOBAL} from '../../const/global';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  algo;
  
  constructor() { 

    this.algo = GLOBAL;

    console.log('FooterComponent constructor',this.algo);
  }//constructor

  ngOnInit() {
  }//ngOnInit

}
