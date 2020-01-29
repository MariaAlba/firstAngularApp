export class Pokemon {

    private _id: number;
    private _nombre: string;
    private _imagen: string;
    private _habilidades: Array<any>;

    constructor(nombre: string) {
        this.id = 0;
        this.nombre = nombre;
        this.imagen = 'http://aux.iconspalace.com/uploads/2116404522463441715.png';
        this.habilidades = [];
    }

    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = (value != undefined && value != '') ? value : 'sin nombre';
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

    public get habilidades(): Array<any> {
        return this._habilidades;
    }
    public set habilidades(value: Array<any>) {
        this._habilidades = value;
    }


}
