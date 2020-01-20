import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { 
    console.trace('Pokemon service constructor');
  }

  //devuelve un pokemon por su id
  getPokemon(){
    let url = "https://pokeapi.co/api/v2/pokemon/1/";
    console.trace('pokemonServce getPokemon '+url);
    return this.http.get(url);
  }


}
