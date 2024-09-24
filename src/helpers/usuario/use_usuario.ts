import type { PrismaClient } from "@prisma/client"
import UsuarioRepositoryPrisma from "../../core/respository/UsuarioRepository/UsuarioRepository"
import useBuscarUsuarioPorId from "./use_usuario_buscar_por_id"
import useCriarUsuario from "./use_usuario_criar"



export default function useUsuario(prima:PrismaClient){
    const repositoryPrisma=UsuarioRepositoryPrisma.with(prima)
    const {buscar_usuario_por_id}=useBuscarUsuarioPorId(repositoryPrisma)
    const {criar_usuario}=useCriarUsuario(repositoryPrisma)
   

    return {
        buscar_usuario_por_id,
        criar_usuario
    }
 
}