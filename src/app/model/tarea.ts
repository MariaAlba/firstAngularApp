interface Itarea{
    id:number;
    titulo:string;
    completada:boolean;
}

export class Tarea implements Itarea{
    
    id: number;    
    titulo: string;
    completada: boolean;

    constructor(){
        this.id = 0;
        this.titulo;
        this.completada = false;
    }
}