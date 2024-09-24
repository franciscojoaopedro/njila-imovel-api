import type { PrismaClient } from "@prisma/client";
import ImagemPropreedadeRepositoryPrisma from "../../core/respository/ImagemPropreedadeRepository/ImagemPropreedadeRepository";
import CriarImagemPropreedadeUseCases from "../../usecases/ImagemPropreedadeUseCases/criarPropreedadeUseCase";





export default function useImagePropriedade(prisma:PrismaClient){
    const imagemPropriedadeRepositoryPrisma=ImagemPropreedadeRepositoryPrisma.with(prisma)
    const ImagemPropriedade=CriarImagemPropreedadeUseCases.with(imagemPropriedadeRepositoryPrisma)

    return{
        ImagemPropriedade
    }
}