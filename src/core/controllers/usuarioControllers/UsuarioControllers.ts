import type { Request, Response } from "express";
import type { IUsuario } from "../../domain/entities/model/IUsuario";
import useUsuario from "../../../helpers/usuario/use_usuario";
import prisma from "../../../packages/prisma/prisma";
import clerkClient from "../../../packages/clerk";
import { useUploadeOneFile } from "../../../utils/upload_files";






export default class ControllersUsuarios {



    async execute(req: Request, res: Response) {
        const { email, nome, senha, sobrenome, telefone } = req.body


        console.log({ email, nome, senha, sobrenome, telefone })
        const file = req.file


        try {
            const { criar_usuario } = useUsuario(prisma)
            const verificarUsuarioSeExisteNoClerk = await clerkClient.users.getUserList({
                emailAddress: [email],
                phoneNumber: [telefone]
            })
            
            const verificarApenasEmail= verificarUsuarioSeExisteNoClerk.data.map(user=>user.emailAddresses[0].emailAddress)[0]
            const verificarApenasTelefone=verificarUsuarioSeExisteNoClerk.data.map(user=>user.phoneNumbers[0].phoneNumber)[0]

            console.log(verificarApenasEmail)
            console.log(verificarApenasTelefone)
          
            if(verificarApenasEmail===email){
                return res.status(400).json({
                    success: false,
                    message: "Email ja esta sendo utilizado",
                })
           
            }
            if (verificarApenasTelefone===telefone) {
                
                
                
                
                return res.status(400).json({
                    success: false,
                    message: "Telefone  ja esta sendo utilizado",
                })
                
                
            }



            console.log({
                email: verificarUsuarioSeExisteNoClerk.data,
                iduser: verificarUsuarioSeExisteNoClerk.totalCount
            })





            if (file) {

                const avatar = await useUploadeOneFile({
                    file,
                    pasta: "avatar_client"
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

                const fotoDePerfil=await prisma.avatar.create({
                    data:{
                        user:{connect:{id:data?.id!}}
                        ,
                        imageUrl: avatar.imageUrl
                    }
                })






                res.status(201)
                    .json({
                        success: true,
                        message: "Usuario criado com sucesso!",
                        data: data,
                        user_clerk_id: user_clerk_id
                    })
            }
            else{


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

            }




        } catch (error) {

            res.status(500)
                .json({
                    success: false,
                    message: "Erro ao criar o usuario!",
                })
        }
    }


    async buscarUsuarioPorId(req: Request, res: Response) {
        const { idUsuario } = req.params



        try {
            const { buscar_usuario_por_id } = useUsuario(prisma)
            const data = await buscar_usuario_por_id.execute({
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