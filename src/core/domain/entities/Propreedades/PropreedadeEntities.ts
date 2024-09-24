import type { IPropreedade } from "../model/IPropreedade";

export default class Propreedade{
    private constructor(private readonly propreedade:IPropreedade){
        this.propreedade = propreedade;
    }
    public static criar(propreedade:IPropreedade){
        return new Propreedade(propreedade)
    }
    public static with(propreedade:IPropreedade){
        return Propreedade.criar(propreedade)
    }
    public  get buscarPropreedade(){
         return this.propreedade
    }
}