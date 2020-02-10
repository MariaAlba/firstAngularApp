import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/model/tarea';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {

  tareas:Array<Tarea>;

  constructor(private servicioTarea:TareasService) { 
    console.trace('Constructor TareasComponent');
    this.tareas = []; //inicializar


  }//constructor

  ngOnInit() {
    console.trace('NgOnInit TareasComponent');

    //llamar al service para obtener tareas
    this.servicioTarea.listar().subscribe((datos) => {
      console.debug('esto se ejecuta de forma asincrona');
      this.tareas = datos;
    });

  }//ngOnInit

}//TareasComponent
