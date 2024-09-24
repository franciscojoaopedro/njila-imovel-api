import type { IUsuario, OUsuario } from "../../core/domain/entities/model/IUsuario";
import Usuario from "../../core/domain/entities/Usuario/UsuarioEntitie";
import type UsuarioGateway from "../../core/gateway/UsuarioGateway/UsuarioGateway";
import type UseCases from "../usecase";



type inputDTO=IUsuario
type outputDTO=OUsuario



export default class CriarUsuarioUsecase implements UseCases <inputDTO,outputDTO>{
    
    private constructor(private readonly usuarioGateway:UsuarioGateway){}

    public static criar(usuarioGateway:UsuarioGateway){
        return new CriarUsuarioUsecase(usuarioGateway)
    }
    public static with(usuarioGateway:UsuarioGateway){
        return CriarUsuarioUsecase.criar(usuarioGateway)
    }
   async  execute(inputData: IUsuario): Promise<OUsuario> {
        const usuario=Usuario.with(inputData)
        const resultado= await this.usuarioGateway.criarUsuario(usuario)
        return   resultado
    }
}