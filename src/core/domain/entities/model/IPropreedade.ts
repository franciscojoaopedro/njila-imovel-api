export interface IPropreedade{
    idPropreetario:string;
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
    criadoEm: Date;
    atualizadoEm: Date;
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