import type { IUsuario } from "../../core/domain/entities/model/IUsuario";
import type UsuarioGateway from "../../core/gateway/UsuarioGateway/UsuarioGateway";
import type UseCases from "../usecase";


type InputData={
    idUsuario:string
}
type OutputData=IUsuario

export default class BuscarUsuarioComIdUseCase  implements UseCases <InputData,OutputData>  {

    private constructor(private readonly usuarioGateway:UsuarioGateway){}

    public static criar(usuarioGateway:UsuarioGateway){
        return new BuscarUsuarioComIdUseCase(usuarioGateway)
    }
    public static with(usuarioGateway:UsuarioGateway){
        return  BuscarUsuarioComIdUseCase.criar(usuarioGateway)
    }

    async execute(inputData: InputData): Promise<IUsuario> {
        const usuaio= this.usuarioGateway.buscarUsuarioPeloId(inputData.idUsuario)
        return usuaio
    }


}