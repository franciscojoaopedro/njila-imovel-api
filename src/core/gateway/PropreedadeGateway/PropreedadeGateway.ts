import type { IFiltroPropriedades, IPropriedadeFiltradas, OAllPropriedade, OPropreedade } from "../../domain/entities/model/IPropreedade";
import type Propreedade from "../../domain/entities/Propreedades/PropreedadeEntities";





export default interface PropreedadeGateway{
    criar(propreedade:Propreedade):Promise<OPropreedade>
    buscarTodos(data:IFiltroPropriedades):Promise<IPropriedadeFiltradas>
    getProprityById(data:{idPropriedade:string}):Promise<OAllPropriedade |null>

}