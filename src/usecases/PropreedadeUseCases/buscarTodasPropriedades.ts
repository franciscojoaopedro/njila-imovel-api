import type { IFiltroPropriedades, IPropriedadeFiltradas, OAllPropriedade } from "../../core/domain/entities/model/IPropreedade";
import type PropreedadeGateway from "../../core/gateway/PropreedadeGateway/PropreedadeGateway";
import type UseCases from "../usecase";





export default class BuscarTodasPropriedadesUseCase implements UseCases <IFiltroPropriedades,IPropriedadeFiltradas> {
    private constructor(private readonly propriedadeGateway:PropreedadeGateway){}
    public static criar(propriedadeGateway:PropreedadeGateway){
        return new BuscarTodasPropriedadesUseCase(propriedadeGateway)
    }
    public static with(propriedadeGateway:PropreedadeGateway){
        return BuscarTodasPropriedadesUseCase.criar(propriedadeGateway)
    }


    async execute(data:IFiltroPropriedades){
        const propriedades  =  await this.propriedadeGateway.buscarTodos(data)
       return propriedades
    }




}