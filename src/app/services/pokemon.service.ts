import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
//observable viene relacionado con programacon reactiva

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { 
    console.trace('Pokemon service constructor');
  }

  //devuelve un pokemon por su id
  getPokemon(nombre:string){
    let url = `https://pokeapi.co/api/v2/pokemon/${nombre}/`;
    console.trace('pokemonServce getPokemon '+url);
    return this.http.get(url); //devuelve un observable
  }


}
