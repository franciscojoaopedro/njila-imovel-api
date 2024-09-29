import type { Request, Response } from "express";
import prisma from "../../../packages/prisma/prisma";
import { useUploadImages } from "../../../utils/upload_files";
import usePropriedade from "../../../helpers/propriedade/usePropriedade";
import useImagePropriedade from "../../../helpers/imagePropriedade/useImagePropriedade";
import type {TipoNegocio, TipoPropriedade,DetalhesDaPropriedade} from "@prisma/client";




interface RequestPropriedadeController {
    descricao: string,
    endereco: string,
    preco: number,
    titulo: string,
    idProprietario: string,
    tipo: TipoPropriedade
    
    tipoNegocio:TipoNegocio
}


interface RequestDetalhes {
    areaTotalLote?: number | null
    quintal?:   boolean | null
    quartos?: number | null
    anoConstrucao?: number | null
    piso?: string | null
    wc?: number | null
    elevador?: boolean | null
    estacionamento?: string | null
    carregamentoCarrosEletricos?: boolean | null
    detalhesEnergeticos?: string | null
}

export default class CriarPropriedadeController {
    async execute(req: Request, res: Response) {
        const { descricao, endereco, preco, tipo, titulo, idProprietario,tipoNegocio }:
            RequestPropriedadeController

            = req.body

            const {detalhes }=req.body
        req.setTimeout(120 * 1000)

        const data = JSON.parse(detalhes) as DetalhesDaPropriedade
        console.log({
            descricao, endereco, preco, tipo, titulo, idProprietario,
            detalhes: data
        })
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
            // const detalhes = {
            //     areaTotalLote: 200,
            //     quintal: 50,
            //     quartos: 3,
            //     anoConstrucao: 2020,
            //     piso: 'Cerâmico',
            //     wc: 2,
            //     elevador: 'Sim',
            //     estacionamento: 'Sim',
            //     carregamentoCarrosEletricos: 'Sim',
            //     detalhesEnergeticos: 'A casa possui sistema de energia solar.',
            //   };

            // const Detalhes= await prisma.detalhesDaPropriedade.create({
            //     data: {
            //        ...detalhes
            //     },
            //   });


            const propriedade = await criarPropriedades.execute({
                descricao,
                endereco,
                idPropreetario: idProprietario,
                preco: Number(preco),
                tipo,
                titulo,
                // idDetalhes:Detalhes.id,
                detalhes: data,
                tipoNegocio,
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
                    message: "erro interno ao criar o imovel",
                  
                })
        }

    }

}