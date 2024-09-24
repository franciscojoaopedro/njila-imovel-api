import type UsuarioRepositoryPrisma from "../../core/respository/UsuarioRepository/UsuarioRepository";
import CriarUsuarioUsecase from "../../usecases/UsuarioUseCases/criarUsuarioUseCase";




export default function useCriarUsuario(repositoryPrisma:UsuarioRepositoryPrisma){
    const criar_usuario=CriarUsuarioUsecase.with(repositoryPrisma)
    return {criar_usuario}

}