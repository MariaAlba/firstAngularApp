export class Pokemon {
    
    private _id: number;    
    private _nombre: string;
    private _imagen: string;
    private _habilidad: string;
    
    constructor(nombre:string){
        this.id = 0;
        this.nombre = nombre;
        this.imagen = 'http://aux.iconspalace.com/uploads/2116404522463441715.png';
    }  
    
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = ( value != undefined && value != '' ) ? value : 'sin nombre';
    }
    
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    
    public get imagen(): string {
        return this._imagen;
    }
    public set imagen(value: string) {
        this._imagen = value;
    }

    public get habilidad(): string {
        return this._habilidad;
    }
    public set habilidad(value: string) {
        this._habilidad = value;
    }

  




}
