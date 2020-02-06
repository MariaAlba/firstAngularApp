import { Pipe, PipeTransform, ɵɵelementContainerStart } from '@angular/core';

@Pipe({
  name: 'animalesFiltro'
})
export class AnimalesPipe implements PipeTransform {

 // transform(datos: any, ...args: any[]): any {
  transform(datos: any,busqueda:string,tipo:string): any {
    
    let resultado = datos;

  

    if ( tipo && tipo !== 'TODOS' ) {
      resultado = resultado.filter( (el) => el.Tipo === tipo);
    }

    if(busqueda && ' ' !== busqueda.trim()){
      resultado = resultado.filter( (el) =>
      {
        busqueda =busqueda.toUpperCase();
        let nombre = el.Nombre.toUpperCase();
        return nombre.includes(busqueda)
      });

    }

   
    
    
    
    return resultado;
  }//transform

}//AnimalesPipe
