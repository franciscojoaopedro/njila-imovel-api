import type { Request, Response } from "express"
import usePropriedade from "../../../helpers/propriedade/usePropriedade"
import prisma from "../../../packages/prisma/prisma"



export default class BuscarTodasPropriedadesController{
    async execute(req: Request, res: Response) {
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
                    messages: "erro ao buscar os imoveis",
        
                })
        }
    }
}