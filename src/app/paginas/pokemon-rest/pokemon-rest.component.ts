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
  p:Pokemon;
  mensaje:string;
  
  constructor(private pokemonService:PokemonService) {
    console.trace('PokemonRestComponent constructor')
    this.pokemon = new Pokemon('pikachu');
    console.debug(this.pokemon);
 
    this.p =new Pokemon('');
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
        this.p.habilidades = [];
  
     
       let habilidadesNames = data.abilities.map( el => el.ability.name );
        console.debug('habilidades en ingles %o', habilidadesNames);

        habilidadesNames.forEach( habilidad => {
            // conseguir su habilidad en castellano
            this.pokemonService.getHabilidad( habilidad ).subscribe(
              json => {
                console.debug('habilidad %o' ,  json);
                let habilidadCastellano = json.names.find( el => el.language.name === 'es' );
                console.debug('recupera habiliada en castellano %o', habilidadCastellano.name);
                this.p.habilidades.push(habilidadCastellano.name);
               
                console.debug('aki',this.p.habilidades);
              });
            });
        
        
        this.mensaje = 'Pokemon cargado desde https:pokeapi.co';

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
