import type PropreedadeGateway from "../../core/gateway/PropreedadeGateway/PropreedadeGateway";
import type UseCases from "../usecase";





export default class BuscarTodasPropriedadesUseCase {


    private constructor(private readonly propriedadeGateway:PropreedadeGateway){}
    public static criar(propriedadeGateway:PropreedadeGateway){
        return new BuscarTodasPropriedadesUseCase(propriedadeGateway)
    }
    public static with(propriedadeGateway:PropreedadeGateway){
        return BuscarTodasPropriedadesUseCase.criar(propriedadeGateway)
    }


    async execute(){
        const propriedades  =  await this.propriedadeGateway.buscarTodos()
       return propriedades
    }




}