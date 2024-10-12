import type { Request, Response } from "express"
import usePropriedade from "../../../helpers/propriedade/usePropriedade"
import prisma from "../../../packages/prisma/prisma"


export default class BuscarTodasPropriedadesController{
    async execute(req: Request, res: Response) {
        const { pagina, limite, endereco, tipo, tipoNegocio } = req.query;
        
        req.setTimeout(1200000)
        try {
            const { buscarTodasPropriedades } = usePropriedade(prisma)


            const n=limite?limite:10
            const {propriedades,limit ,page,total} = await buscarTodasPropriedades.execute({
                page: Number(pagina),
                limit: Number(n),
                endereco: endereco ? String(endereco) : undefined,
                TipoPropriedade: tipo ? String(tipo) : undefined,
                tipoNegocio: tipoNegocio ? String(tipoNegocio) : undefined,
            })
            return res.status(200)
                .json({
                    success: true,
                    messages: "sucesso",
                    data: {
                        propriedades,
                        total,
                        page,
                        limit,
                        paginaTotal: Math.ceil(total / Number(limit)),
                    }
                })
        }
        catch (error) {
            return res.status(500)
                .json({
                    success: true,
                    messages: "erro ao buscar os imoveis",
                    error: error instanceof Error && error.message,
        
                })
        }
    }
}