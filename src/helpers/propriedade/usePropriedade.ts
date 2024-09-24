import type { PrismaClient } from "@prisma/client"
import PropreedadeRepositoryPrisma from "../../core/respository/PropreedadeRepository/PropreedadeRepository"
import CriarPropreedadeUsecase from "../../usecases/PropreedadeUseCases/criarPropreedadeUseCases"
import BuscarTodasPropriedadesUseCase from "../../usecases/PropreedadeUseCases/buscarTodasPropriedades"




export default function usePropriedade(prisma:PrismaClient){
    const propreedadeRepositoryPrisma = PropreedadeRepositoryPrisma.with(prisma)
    const criarPropriedades = CriarPropreedadeUsecase.with(propreedadeRepositoryPrisma)
    const buscarTodasPropriedades=BuscarTodasPropriedadesUseCase.with( propreedadeRepositoryPrisma)


    return{
        criarPropriedades,
        buscarTodasPropriedades
    }
}