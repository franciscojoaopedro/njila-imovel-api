import type { PrismaClient } from "@prisma/client";
import type PropreedadeGateway from "../../gateway/PropreedadeGateway/PropreedadeGateway";
import type Propreedade from "../../domain/entities/Propreedades/PropreedadeEntities";
import type { IPropreedade, OAllPropriedade, OPropreedade } from "../../domain/entities/model/IPropreedade";





export default class PropreedadeRepositoryPrisma implements PropreedadeGateway{
    private constructor(private readonly prisma: PrismaClient){
        this.prisma = prisma
    }
    public static criar(prisma:PrismaClient){
        return new PropreedadeRepositoryPrisma(prisma)
    }
    public static with(prisma:PrismaClient){
        return  PropreedadeRepositoryPrisma.criar(prisma)
    }
    public async buscarTodos(): Promise<OAllPropriedade  []> {
        const propriedades= await this.prisma.propreedade.findMany({
            include:{
                Imagem:true,
                detalhes:true,
                propreetario:{
                    select:{
                        nome:true,
                        sobrenome:true,
                        avatar:true,
                        email:true,
                        telefone:true,
                    }
                }
            }
        })

        
        return propriedades
    }
   async criar(propreedade: Propreedade): Promise<OPropreedade> {
        const data={
           ...propreedade.buscarPropreedade
           
        }

        console.log("salvando propreedade com prisma")
        console.log(data)

        const detalhes = {
            areaTotalLote: 200,
            quintal: 50,
            quartos: 3,
            anoConstrucao: 2020,
            piso: 'Cerâmico',
            wc: 2,
            elevador: 'Sim',
            estacionamento: 'Sim',
            carregamentoCarrosEletricos: 'Sim',
            detalhesEnergeticos: 'A casa possui sistema de energia solar.',
          };
    
        const nova_propreedade=await this.prisma.propreedade.create({
            data:{
                descricao:data.descricao,
                endereco:data.endereco,
                preco:data.preco,
                tipo:data.tipo,
                titulo:data.titulo,
                propreetario:{connect:{id:data.idPropreetario}},
                detalhes:{
                    create:{
                        ...detalhes
                    }
                }
            }
        })

        return nova_propreedade
    }
   async buscar(propreedade: IPropreedade): Promise<any> {
        
    }
}

