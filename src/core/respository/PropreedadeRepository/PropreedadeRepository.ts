import type { PrismaClient } from "@prisma/client";
import type PropreedadeGateway from "../../gateway/PropreedadeGateway/PropreedadeGateway";
import type Propreedade from "../../domain/entities/Propreedades/PropreedadeEntities";
import type { IPropreedade, OAllPropriedade, OPropreedade } from "../../domain/entities/model/IPropreedade";





export default class PropreedadeRepositoryPrisma implements PropreedadeGateway {
    private constructor(private readonly prisma: PrismaClient) {
        this.prisma = prisma
    }
    public static criar(prisma: PrismaClient) {
        return new PropreedadeRepositoryPrisma(prisma)
    }
    public static with(prisma: PrismaClient) {
        return PropreedadeRepositoryPrisma.criar(prisma)
    }
    public async buscarTodos(): Promise<OAllPropriedade[]> {
        const propriedades = await this.prisma.propreedade.findMany({
            include: {
                Imagem: true,
                detalhes: true,
                propreetario: {
                    select: {
                        nome: true,
                        sobrenome: true,
                        avatar: true,
                        email: true,
                        telefone: true,
                    }
                }
            }
        })


        return propriedades
    }
    async criar(propreedade: Propreedade): Promise<OPropreedade> {
        const data = {
            ...propreedade.buscarPropreedade,


        }

        console.log("salvando propreedade com prisma")
        console.log(data)
        const nova_propreedade = await this.prisma.propreedade.create({
            data: {
                descricao: data.descricao,
                endereco: data.endereco,
                preco: data.preco,
                tipo: data.tipo,
                titulo: data.titulo,
                propreetario: { connect: { id: data.idPropreetario } },
                detalhes: {
                    create: {
                        ...data.detalhes
                    }
                },
                tipoNegocio:data.tipoNegocio,
                disponibilidade:"DISPONIVEL"
            }
        })

        return nova_propreedade
    }
    async getProprityById(data: { idPropriedade: string; }): Promise<OAllPropriedade | null> {
        const propriedade = await this.prisma.propreedade.findUnique({
            where: {
                id: data.idPropriedade
            },
            include: {
                Imagem: true,
                detalhes: true,
                propreetario: {
                    select: {
                        nome: true,
                        sobrenome: true,
                        avatar: true,
                        email: true,
                        telefone: true,
                    }
                }
            }
        })

        return propriedade
    }
}

