import type { IUsuario } from "../model/IUsuario";

export default class Usuario {
   private constructor(private readonly usuario:IUsuario) { 
    this.usuario=usuario
    }
    public static criar(usuario:IUsuario):Usuario{
       return new Usuario(usuario)
    }
    public static with(usuario:IUsuario){
        return Usuario.criar(usuario)
    }
    public get buscarUsuario(){
        return this.usuario
    }
}