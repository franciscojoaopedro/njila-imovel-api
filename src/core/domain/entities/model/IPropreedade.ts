export interface IPropreedade{
    idPropreetario:string;
    idDetalhes:string;
    titulo       : string
    endereco     :string
    descricao :string 
    preco       :number
    tipo        :string
}


export interface OPropreedade{
    id: string;
    titulo: string;
    endereco: string;
    descricao: string;
    preco: number;
    tipo: string;
    propreetarioId: string;
}

export interface OAllPropriedade{
    id: string;
    titulo: string;
    endereco: string;
    descricao: string;
    preco: number;
    tipo: string;
    propreetarioId: string;
    detalhesId: string;
    criadoEm: Date;
    atualizadoEm: Date;
    detalhes:{
        id: string;
        areaTotalLote: number |null;
        quintal: number |null;
        quartos: number |null;
        anoConstrucao: number |null;
        piso: string | null;
        wc: number |null;
        elevador:  string | null;
        estacionamento:  string | null;
        carregamentoCarrosEletricos:  string | null;
        detalhesEnergeticos:  string | null;
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