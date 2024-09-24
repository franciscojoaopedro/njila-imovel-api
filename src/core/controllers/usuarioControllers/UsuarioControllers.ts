import type { Request, Response } from "express";
import type { IUsuario } from "../../domain/entities/model/IUsuario";
import UsuarioRepository from "../../respository/UsuarioRepository/UsuarioRepository";
import CriarUsuarioUsecase from "../../../usecases/UsuarioUseCases/criarUsuarioUseCase";
import ListarUsuarioUseCase from "../../../usecases/UsuarioUseCases/buscarUsuarioComIdUseCase";
import { db } from "../../../packages/db/db";
import useUsuario from "../../../helpers/usuario/use_usuario";
import prisma from "../../../packages/prisma/prisma";
import clerkClient from "../../../packages/clerk";






export default class ControllersUsuarios {

    constructor() { }

    async criarUsuario(req: Request, res: Response) {
        const { email, nome, senha, sobrenome, telefone } = req.body as IUsuario

        console.log({ email, nome, senha, sobrenome, telefone })

        try {

            const { criar_usuario } = useUsuario(prisma)


            const verificarUsuarioSeExisteNoClerk = await clerkClient.users.getUserList({
                emailAddress: [email],
                phoneNumber: [telefone]
            })


            if (verificarUsuarioSeExisteNoClerk.data && verificarUsuarioSeExisteNoClerk.totalCount) {
                res.status(404)
                    .json({
                        success: false,
                        message: "Ja existe alguem utilizando esse Email ou Telefone",

                    })
            }



            console.log({
                email: verificarUsuarioSeExisteNoClerk.data,
                iduser: verificarUsuarioSeExisteNoClerk.totalCount
            })

    
            const usuario = await clerkClient.users.createUser({
                emailAddress: [email],
                firstName: nome,
                lastName: sobrenome,
                phoneNumber: [telefone],
                password: senha,
            })
            const user_clerk_id = usuario.id

            const data = await criar_usuario.execute({
                idUserClerk: user_clerk_id,
                email,
                nome,
                senha,
                sobrenome,
                telefone,
                conta: false,
                online: false
            })




            res.status(201)
                .json({
                    success: true,
                    message: "Usuario criado com sucesso!",
                    data: data,
                    user_clerk_id: user_clerk_id
                })



        } catch (error) {

            res.status(500)
                .json({
                    success: false,
                    message: "Erro ao criar o usuario!",
                    error: error?.message
                })
        }
    }


    async buscarUsuarioPorId(req: Request, res: Response) {
        const { idUsuario } = req.params



        try {
            const data = await this.controller.buscar_usuario_por_id.execute({
                idUsuario
            })
            res.status(200)
                .json({
                    success: true,
                    message: "Usuario encontrado",
                    data

                })
        } catch (error) {
            res.status(500)
                .json({
                    success: false,
                    message: "Erro a listar  usuario"
                })
        }

    }
}