import { z } from "zod";




export const usuario_schema=z.object({
    nome: z.string().min(3).max(50),
    email: z.string().email(),
    senha: z.string().min(7).max(16),
    sobrenome:z.string().min(3).max(50),
    telefone:z.string().min(9).max(15)
})