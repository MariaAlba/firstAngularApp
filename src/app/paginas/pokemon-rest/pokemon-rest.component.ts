import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-rest',
  templateUrl: './pokemon-rest.component.html',
  styleUrls: ['./pokemon-rest.component.scss']
})
export class PokemonRestComponent implements OnInit {

  pokemon:Pokemon;
  p:any;
  mensaje:string;
  
  constructor(private pokemonService:PokemonService) {
    console.trace('PokemonRestComponent constructor')
    this.pokemon = new Pokemon('pikachu');
    console.debug(this.pokemon);
 
    this.p ={};
    this.mensaje ='';
   
   }

  ngOnInit() {
    console.trace('PokemonRestComponent ngOnInit');

    //lamadas a los servicios

    //cuando llamamos a un observable tenmos tres posibles metodos 
    //y solo uno es obligatorio
    // a un observable nos tenemos que suscribir
    //3 funciones para el suscribir
    //todo bien
    //falla
    //always
    //this.pokemon.nombre
    //this.pokemonService.getPokemon('pikachu').suscribe();
    

   
    

    this.pokemonService.getPokemon(this.pokemon.nombre).subscribe(

      data => {
        console.debug('peticion correcta data %o', data);
        
        this.p.nombre = data.name;
        this.p.id = data.id;
        this.p.imagen = data.sprites.front_default;
        this.p.habilidad = data.abilities[0].ability.url;
     
        this.mensaje = 'Pokemon cargado desde https:pokeapi.co';

        //conseguir habilidad
        this.pokemonService.getCaracteristicas(this.p.habilidad).subscribe(

          data => {
            console.debug('peticion correcta data caracteristicas %o', data);
            
           let x =  data.names.find((el)=>el.language.name === 'es');
           this.p.habilidad = x.name;
         
          
         console.debug('x',x);
           
            //conseguir habilidad
            
          },
          error => {
            console.warn('peticion erronea error %o', error);
          
          },
          () => {
            console.trace('esto se hace siempre');
          }
          
    
    
        );
        
      },
      error => {
        console.warn('peticion erronea error %o', error);
        this.mensaje = 'No exixte pokemon X';
      },
      () => {
        console.trace('esto se hace siempre');
      }
      


    );
    


   


  }

}
