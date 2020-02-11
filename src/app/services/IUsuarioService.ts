import { Usuario } from '../model/usuario';

export interface IUsuarioService{


    estaLogeado():boolean;

    /**
     * Comprueba que existe el usuario
     * @param nombre 
     * @param password 
     * @return usuario con datos si existe / undefined si no existe
     */
    login(nombre:string, password:string):Usuario;

    cerrarSesion():void;
    
}