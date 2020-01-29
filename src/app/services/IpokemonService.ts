import { Observable } from "rxjs";

 interface IPokemonService {

    /**
     * Recuperamos los datos en json de un pokemon por su nombre
     * @param nombre : string nombre del pokemonn a buscar
     */
    getPokemon(nombre:string):Observable<any>;


    /**
     * Recupera un json con las caracteriscas de un pokemon
     * @param id :number identificador del pokemon
     * @see  GET/api/v2/characteristic/{id}/
     */
    getCaracteristicas(id:number):Observable<any>;


}