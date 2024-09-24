export interface IUsuario{
    id?:string
    idUserClerk:string,
    nome:string
    sobrenome:string
    email:string
    telefone:string
    online?:boolean
    senha:string
    conta?:boolean
}


export interface OUsuario{
    id: string;
    idUserClerk: string;
    email: string;
    nome: string;
    sobrenome: string;
  
    telefone: string;
    online: boolean;
    conta: boolean;
}