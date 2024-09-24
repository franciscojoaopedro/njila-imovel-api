import type { OUsuario } from "../../domain/entities/model/IUsuario";
import type Usuario from "../../domain/entities/Usuario/UsuarioEntitie";

export default interface UsuarioGateway{
    criarUsuario(usuario:Usuario):Promise<OUsuario>
    buscarUsuarioPeloId(idUsuario:string):Promise<any>
    
}