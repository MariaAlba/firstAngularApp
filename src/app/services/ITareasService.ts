import { Observable } from "rxjs";
import { Tarea } from '../model/tarea';

export interface ITareasService{

    listar():Observable<Array<Tarea>>;

    detalle(id:number):Observable<Tarea>;

    /**
     * Crear nueva tarea
     * @param tarea a dar de alta sin id
     * @returns un observables con la tarea dada de alta e ID actualizada
     */
    crear(tarea:Tarea):Observable<Tarea>;

    modificar(tarea:Tarea):Observable<Tarea>;

    eliminar(id:number):Observable<Tarea>;

}