import type { PrismaClient } from "@prisma/client";
import type ImagemPropreedadeGateway from "../../gateway/ImagemPropreedadeGateway/ImagemPropreedadeGateway";
import type ImagemPropreedade from "../../domain/entities/ImagemPropriedade/ImagemPropreedadeEntities";
import type { OImagemPropreedade } from "../../domain/entities/model/IImagemPropreedade";



export default class ImagemPropreedadeRepositoryPrisma implements ImagemPropreedadeGateway{
    private constructor(private readonly prisma: PrismaClient){
        this.prisma = prisma
    }
    public static criar(prisma: any){
        return new ImagemPropreedadeRepositoryPrisma(prisma)
    }
    public static with(prisma: any){
        return ImagemPropreedadeRepositoryPrisma.criar(prisma)
    }
     async criar(imagem: ImagemPropreedade): Promise<OImagemPropreedade> {
        const data={
            ...imagem.buscarImagemPropreedade
        }

        const new_imagem=await this.prisma.imagemPropriedade.create({
            data:{
                imageUrl:data.imageUrl,
                propreedade:{connect:{id:data.propreedadeId}}
            }
        })

        return new_imagem
    }

}