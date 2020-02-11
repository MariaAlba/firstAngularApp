import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario:FormGroup;
  
  constructor(private builder:FormBuilder) { 
    //construir el formulario 
    this.formulario= this.builder.group({

      //definir los formcontrol que se corresponden a los input
      nombre:['',[Validators.required,Validators.minLength(5),Validators.maxLength(100)]],
      password :['',[Validators.required,Validators.minLength(5),Validators.maxLength(7)]]

    });

  }//constructor

  ngOnInit() {
  }//ngOnInit

  enviar(values:any){
    console.trace('Submit formulario %o',values);
  }//enviar

}// LoginComponent
