import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPokemonService } from './IpokemonService';

//observable viene relacionado con programacion reactiva

@Injectable({
  providedIn: 'root'
})

export class PokemonService implements IPokemonService{
  
  constructor(private http: HttpClient) { 
    console.trace('Pokemon service constructor');
  }

  //devuelve un pokemon por su nombre
  getPokemon(nombre:string):any{
    let url = `https://pokeapi.co/api/v2/pokemon/${nombre}/`;
    console.trace('pokemonServce getPokemon '+url);
    return this.http.get(url); //devuelve un observable
  }

  //devuelve lista de habilidades
  getHabilidad( nombreHabilidad : string): Observable<any> {
    let url = `https://pokeapi.co/api/v2/ability/${nombreHabilidad}/`;
    console.trace('PokemonService getHabilidad ' + url);
    return this.http.get(url);
  }
  
  //devuelve caracteristicas de pokemon por id
  // getCaracteristicas(habilidadUrl:string): Observable<any> {
  //  let url = habilidadUrl;
  //  return this.http.get(url);
  // }

}
