import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario:FormGroup;
 
  
  constructor(private builder:FormBuilder, private usuarioService:UsuarioService, private router:Router) { 
    //construir el formulario 
    this.formulario= this.builder.group({
    

      //definir los formcontrol que se corresponden a los input
      nombre:['admin',[Validators.required,Validators.minLength(5),Validators.maxLength(100)]],
      password :['admin',[Validators.required,Validators.minLength(5),Validators.maxLength(7)]]

    });

  }//constructor

  ngOnInit() {
    
  }//ngOnInit

  enviar(values:any, ){
    console.trace('Submit formulario %o',values);
 
    const nombre = values.nombre;
    const password = values.password;
    const uLogeado = this.usuarioService.login(nombre,password);

    if(uLogeado){

      console.trace('usuario logeado con exito %o',uLogeado);
      this.router.navigate(['privado']);

    }else{
      console.warn('Usuario NO logeado');
      //TODO cambiar alert por mensaje
      alert('Por favor prueba de nuevo');
    }
    
  }//enviar



}// LoginComponent
