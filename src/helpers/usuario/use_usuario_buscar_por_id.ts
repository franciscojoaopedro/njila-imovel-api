import { PrismaClient } from "@prisma/client";
import UsuarioRepositoryPrisma from "../../core/respository/UsuarioRepository/UsuarioRepository";
import BuscarUsuarioComIdUseCase from "../../usecases/UsuarioUseCases/buscarUsuarioComIdUseCase";




export default function useBuscarUsuarioPorId(repositoryPrisma:UsuarioRepositoryPrisma){
    const buscar_usuario_por_id=BuscarUsuarioComIdUseCase.with(repositoryPrisma)
    return{ buscar_usuario_por_id}
}