
import type { PrismaClient } from "@prisma/client";
import type { IUsuario, OUsuario } from "../../domain/entities/model/IUsuario";
import Usuario from "../../domain/entities/Usuario/UsuarioEntitie";
import type UsuarioGateway from "../../gateway/UsuarioGateway/UsuarioGateway";
import {v4 as uuid } from "uuid"

export default class UsuarioRepositoryPrisma implements UsuarioGateway  {
    private constructor( private readonly prisma:PrismaClient){}

    public static criar(prisma:PrismaClient){
        return new UsuarioRepositoryPrisma(prisma)
    }

    public static with(prisma:PrismaClient){
        return  UsuarioRepositoryPrisma.criar(prisma)
    }

   
  
  
    async buscarUsuarioPeloId(idUsuario: string): Promise< IUsuario |null |any > {
        const usuario= await this.prisma.usuario.findUnique({
         where:{
             id:idUsuario
         }
        })
        return usuario
     }
  
    async criarUsuario(usuario: Usuario): Promise<OUsuario> {
        
        const data={
            nome:usuario.buscarUsuario.nome,
            email:usuario.buscarUsuario.email,
            sobrenome:usuario.buscarUsuario.sobrenome,
            telefone:usuario.buscarUsuario.telefone,
            senha:usuario.buscarUsuario.senha,
            conta:usuario.buscarUsuario.conta,
            idUserClerk:usuario.buscarUsuario.idUserClerk
        } 
        const new_usuario =await this.prisma.usuario.create({
            data:{
                idUserClerk:data.idUserClerk,
                email:data.email,
                nome:data.nome,
                sobrenome:data.sobrenome,
                telefone:data.telefone,
                senha:data.senha,
                conta:data.conta,
            }
        })

        return {
            id: new_usuario.id,
            email: new_usuario.email,
            nome: new_usuario.nome,
            sobrenome: new_usuario.sobrenome,
            telefone: new_usuario.telefone,
            conta: new_usuario.conta,
            idUserClerk: new_usuario.idUserClerk,
            online: false,
        };
       
    }
}