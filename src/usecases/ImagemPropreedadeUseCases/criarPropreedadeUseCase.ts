import type { IImagemPropreedade,OImagemPropreedade } from "../../core/domain/entities/model/IImagemPropreedade"
import ImagemPropreedade from "../../core/domain/entities/ImagemPropriedade/ImagemPropreedadeEntities"
import type ImagemPropreedadeGateway from "../../core/gateway/ImagemPropreedadeGateway/ImagemPropreedadeGateway"
import type UseCases from "../usecase"





export default class CriarImagemPropreedadeUseCases  implements UseCases <IImagemPropreedade,OImagemPropreedade> {
    private constructor(private readonly imagemGateway: ImagemPropreedadeGateway){}
    public static criar(imagemGateway: ImagemPropreedadeGateway){
        return new CriarImagemPropreedadeUseCases(imagemGateway)
    }
    public static with(imagemGateway: ImagemPropreedadeGateway){
        return CriarImagemPropreedadeUseCases.criar(imagemGateway)
    }
     async execute (imagem: IImagemPropreedade): Promise<OImagemPropreedade>{
        const imagemCriada = ImagemPropreedade.with(imagem)
        const resultado= await this.imagemGateway.criar(imagemCriada)
        return resultado;
    }
}