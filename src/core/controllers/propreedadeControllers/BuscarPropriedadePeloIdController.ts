import type { Request, Response } from "express"
import usePropriedade from "../../../helpers/propriedade/usePropriedade"
import prisma from "../../../packages/prisma/prisma"




export default class BuscarPropriedadesPeloIdController{
    async execute(req: Request, res: Response) {
        const {idPropriedade}=req.params

        req.setTimeout(60000)
        try {
            const { buscarPropriedadePeloId } = usePropriedade(prisma)
            const propriedade = await buscarPropriedadePeloId.execute({
                idPropriedade
            })
            return res.status(200)
                .json({
                    success: true,
                    messages: "sucesso",
                    data: propriedade
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