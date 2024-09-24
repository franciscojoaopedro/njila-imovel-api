import type ImagemPropreedade from "../../domain/entities/ImagemPropriedade/ImagemPropreedadeEntities";
import type { OImagemPropreedade } from "../../domain/entities/model/IImagemPropreedade";


export default interface  ImagemPropreedadeGateway{
    criar(imagem:ImagemPropreedade): Promise<OImagemPropreedade>
}