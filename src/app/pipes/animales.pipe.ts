import { Pipe, PipeTransform, ɵɵelementContainerStart } from '@angular/core';

@Pipe({
  name: 'animalesFiltro'
})
export class AnimalesPipe implements PipeTransform {

 // transform(datos: any, ...args: any[]): any {
  transform(datos: any,busqueda:string): any {
    console.debug('value',datos);
    console.debug('args',busqueda);

    busqueda =busqueda.toUpperCase();
   
    
    
    const resultado = datos.filter( (el) =>
    {
      let nombre = el.Nombre.toUpperCase();
      return nombre.includes(busqueda)
    });
    
    return resultado;
  }//transform

}//AnimalesPipe
