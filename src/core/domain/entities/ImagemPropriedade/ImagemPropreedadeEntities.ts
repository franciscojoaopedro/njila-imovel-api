import type { IImagemPropreedade } from "../model/IImagemPropreedade";

export default class ImagemPropreedade{
    private constructor(private readonly imagem:IImagemPropreedade){
        this.imagem = imagem;
    }
    public static criar(imagem:IImagemPropreedade){
        return new ImagemPropreedade(imagem)
    }
    public static with(imagem:IImagemPropreedade){
        return ImagemPropreedade.criar(imagem)
    }
    public  get buscarImagemPropreedade(){
         return this.imagem
    }
}