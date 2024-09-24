import type { IPropreedade,OPropreedade } from "../../core/domain/entities/model/IPropreedade";
import Propreedade from "../../core/domain/entities/Propreedades/PropreedadeEntities";
import type PropreedadeGateway from "../../core/gateway/PropreedadeGateway/PropreedadeGateway";
import type UseCases from "../usecase";





export default class CriarPropreedadeUsecase implements UseCases <IPropreedade,any> {

    private constructor(private readonly propreedadeGateway: PropreedadeGateway){}
    public static criar(propreedadeGateway: PropreedadeGateway){
        return new CriarPropreedadeUsecase(propreedadeGateway)
    }
    public static with(propreedadeGateway:PropreedadeGateway){
        return CriarPropreedadeUsecase.criar(propreedadeGateway)
    }
    async execute(inputData: IPropreedade): Promise<OPropreedade> {
        const propreedade=  Propreedade.with(inputData)
        const resultado = await this.propreedadeGateway.criar(propreedade)
        return resultado;
    }

}