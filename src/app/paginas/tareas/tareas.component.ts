import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/model/tarea';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {

  tareas: Array<Tarea>;
  tituloNuevo: string;
  mensaje:string;


  constructor(private servicioTarea: TareasService) {
    console.trace('Constructor TareasComponent');
    this.tareas = []; //inicializar
    this.tituloNuevo = '';
    this.mensaje = '';


  }//constructor

  ngOnInit() {
    console.trace('NgOnInit TareasComponent');

    //llamar al service para obtener tareas
    // this.servicioTarea.listar().subscribe((datos) => {
    //   console.debug('esto se ejecuta de forma asincrona');
    //   this.tareas = datos;
    // });
    this.cargarTareas();

  }//ngOnInit


  validarTitulo(titulo:String): boolean{
    return (titulo.trim().length <=1) ? false : true;
  }

  nuevaTarea():void{
    console.debug('click nueva tarea %s', this.tituloNuevo);
    if (this.validarTitulo(this.tituloNuevo)==false){this.mensaje = 'No puede crear una tarea vacía ni de una letra';}
    else{

      //crear objeto tarea
      let tareaNueva = new Tarea();
      tareaNueva.titulo = this.tituloNuevo;
      console.debug('tareaNueva', tareaNueva);
  
      //llamar servicio
      this.servicioTarea.crear(tareaNueva).subscribe( (dato) => {
        console.debug('nueva tarea %o',dato);
        this.cargarTareas();
        this.mensaje = `Creada con éxito la tarea  ${dato.id}  ${dato.titulo}`;
      });
    
      this.tituloNuevo = '';
    }

  }

  editarEstado(tarea: Tarea) {
    console.debug('click %o', tarea);
    tarea.completada = !tarea.completada;

    this.servicioTarea.modificar(tarea).subscribe((data) => {
      this.cargarTareas();
    });
  }//editarEstado

  editarTitulo(tarea:Tarea){
    console.debug('click %o', tarea);
    if ( this.validarTitulo(tarea.titulo)==false) {this.mensaje = 'No puede crear una tarea vacía ni de una letra';}
    else{
      this.servicioTarea.modificar(tarea).subscribe( (data) => {
        this.mensaje = "Tarea modificada con éxito";
        this.cargarTareas();
      });
    }
  }

  eliminar(tarea: Tarea) {
    console.debug('click Eliminar %o', tarea);

    if (confirm('¿Estas seguro?')) {
      console.trace('Confirmado eliminacion');
      this.servicioTarea.eliminar(tarea.id).subscribe(
        () => {
          this.mensaje = `Eliminada con éxito la tarea ${tarea.id} - ${tarea.titulo}`;
          this.cargarTareas()
        });

    } else {
      console.trace('Cancelado eliminacion');
    }

  }//eliminar

  /**
   * Llama al servicio para cargar todas las tareas
   * Servira para recargar la lista
   */
  private cargarTareas(): void {
    console.trace('cargarTareas');

    //llamar al service para obtener tareas
    this.servicioTarea.listar().subscribe((datos) => {
      console.debug('esto se ejecuta de forma asincrona');
      this.tareas = datos.reverse();
      if(this.tareas.length===0){this.mensaje="No hay tareas asignadas";}
    },
    (error) => {
      console.debug('JSON SERVER PARADO',error);
      this.mensaje = 'Error inesperado: no es posible conectar con el servidor';
    }
    
    
    );

  }//cargarTareas

}//TareasComponent
