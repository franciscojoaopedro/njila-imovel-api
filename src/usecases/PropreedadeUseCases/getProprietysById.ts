import type { OAllPropriedade } from "../../core/domain/entities/model/IPropreedade";
import type PropreedadeGateway from "../../core/gateway/PropreedadeGateway/PropreedadeGateway";
import type UseCases from "../usecase";





type Input={
    idPropriedade:string
}
type Output=OAllPropriedade |null

export default class GetProproprietysById  implements UseCases<Input,Output> {


    private constructor(private readonly proprietyGateway:PropreedadeGateway){}


    public static  criar (proprietyGateway:PropreedadeGateway){
        return new GetProproprietysById(proprietyGateway)
    }

    public static with(proprietyGateway:PropreedadeGateway){
        return GetProproprietysById.criar(proprietyGateway)
    }
  async execute(inputData: Input): Promise<OAllPropriedade | null> {
        const propreedade=await this.proprietyGateway.getProprityById({
            idPropriedade:inputData.idPropriedade
        })  

        return propreedade;
  }


}