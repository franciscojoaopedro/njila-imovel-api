import type { Request, Response } from "express";
import prisma from "../../../packages/prisma/prisma";
import { useUploadImages } from "../../../utils/upload_files";
import usePropriedade from "../../../helpers/propriedade/usePropriedade";
import useImagePropriedade from "../../../helpers/imagePropriedade/useImagePropriedade";





export default class ControllerPropreedade {





    async criarPropreedade(req: Request, res: Response) {
        const { descricao, endereco, preco, tipo, titulo, idProprietario } = req.body
        req.setTimeout(120 * 1000)
        try {
            const { criarPropriedades } = usePropriedade(prisma)
            const { ImagemPropriedade } = useImagePropriedade(prisma)

            if (!req.files || req.files.length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "É necessário ter imagens."
                });
            }


            const { uploadedImages } = await useUploadImages({
                files: req.files as Express.Multer.File[],
                pasta: "imagens_propriedades"
            })
            const propriedade = await criarPropriedades.execute({
                descricao,
                endereco,
                idPropreetario: idProprietario,
                preco: Number(preco),
                tipo,
                titulo
            })

            const imagem = await ImagemPropriedade.execute({
                propreedadeId: propriedade.id,
                imageUrl: uploadedImages
            })
            return res.status(201)
                .json({
                    success: true,
                    message: "Propriedade criado com sucesso!",
                    data: {
                        propriedade: propriedade,
                        imagem: imagem
                    }
                })
        }
        catch (error) {
            return res.status(500)
                .json({
                    success: false,
                    message: "erro interno ao criar o imovel"


                })
        }

    }

    async buscarTodasPropriedades(req: Request, res: Response) {
        try {
            const { buscarTodasPropriedades } = usePropriedade(prisma)

            const propriedades = await buscarTodasPropriedades.execute()
            return res.status(200)
                .json({
                    success: true,
                    messages: "sucesso",
                    data: propriedades
                })
        }
        catch (error) {
            return res.status(500)
                .json({
                    success: true,
                    messages: "erro ao buscar os imoveis"
                })
        }
    }


}