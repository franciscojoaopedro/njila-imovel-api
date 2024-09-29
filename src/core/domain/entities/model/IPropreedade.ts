
export type TipoPropriedade =
  | 'APARTAMENTO'
  | 'ESTUDIO'
  | 'VIVENDA'
  | 'PREDIO'
  | 'TERRENO'
  | 'QUINTA'
  | 'FAZENDA'
  | 'LOJA'
  | 'ESCRITORIO';
export type TipoNegocio = 'VENDA' | 'ARRENDAMENTO';

export type DisponibilidadePropriedade = 
    | 'DISPONIVEL'
    | 'EM_NEGOCIACAO'
    | 'INDISPONIVEL'
    |'COMPRADO' 
    | 'ARRENDADO'
    ;


export interface IPropreedade {
    idPropreetario: string;
    // idDetalhes: string;
    titulo: string
    endereco: string
    descricao: string
    preco: number
    tipo: TipoPropriedade
    tipoNegocio:TipoNegocio
    disponibilidade?:DisponibilidadePropriedade | null
    detalhes: {
        areaTotalLote: number |null
        quintal: boolean | null
        quartos: number |null
        anoCnstrucao?: number |null
        piso: string |null
        wc: number |null
        elevador: boolean |null
        estacionamento: boolean |null
        carregamentoCarrosEletricos: boolean |null
        detalhesEnergeticos: string |null
    }
}


export interface OPropreedade {
    id: string;
    titulo: string;
    endereco: string;
    descricao: string;
    preco: number;
    tipo: string;
    propreetarioId: string;
}

export interface OAllPropriedade {
    id: string;
    titulo: string;
    endereco: string;
    descricao: string;
    preco: number;
    tipo: TipoPropriedade,
    tipoNegocio:TipoNegocio
    propreetarioId: string;
    detalhesId: string;
    disponibilidade?:DisponibilidadePropriedade
    criadoEm: Date;
    atualizadoEm: Date;
    detalhes: {
        id: string;
        areaTotalLote?: number |null
        quintal?: boolean |null
        quartos?: number |null
        anoConstrucao?: number |null
        piso?: string |null
        wc?: number |null
        elevador?: boolean |null
        estacionamento?: boolean |null
        carregamentoCarrosEletricos?: boolean |null
        detalhesEnergeticos?: string |null
        criadoEm: Date;
        atualizadoEm: Date;
    }
    propreetario: {
        email: string;
        nome: string;
        sobrenome: string;
        telefone: string;
        avatar: {
            id: number;
            imageUrl: string;
            userId: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
    }
    Imagem: {
        id: number;
        imageUrl: string[];
        propreedadeId: string;
        createdAt: Date;
        updatedAt: Date;
    }[];
}