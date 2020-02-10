import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITareasService } from './ITareasService';
import {Tarea} from '../model/tarea';



@Injectable({
  providedIn: 'root'
})
export class TareasService implements ITareasService{


  constructor(private http: HttpClient) { 
    console.trace('constructor TareasService');

  }//constructor

  listar(): Observable<any> {
    const url  = "http://localhost:3000/tareas"; 
    console.debug(`GET ${url}`);
    return this.http.get(url);
  }

  detalle(id: number): Observable<Tarea> {
    throw new Error("Method not implemented.");
  }

  crear(tarea: Tarea): Observable<Tarea> {
    throw new Error("Method not implemented.");
  }

  modificar(tarea: Tarea): Observable<Tarea> {
    throw new Error("Method not implemented.");
  }

  eliminar(id: number): Observable<Tarea> {
    throw new Error("Method not implemented.");
  }
  
 

 

  
 



}//TareasService
