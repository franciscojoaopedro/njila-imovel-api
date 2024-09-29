import { Router } from "express";
import { multer_propriedades } from "../../../packages/multer/multer";
import { verifyImage } from "../../../middlewares/usuario_middlewares/google-vision";
import BuscarPropriedadesPeloIdController from "../../controllers/propreedadeControllers/BuscarPropriedadePeloIdController";
import BuscarTodasPropriedadesController from "../../controllers/propreedadeControllers/BuscarTodasPropriedadesController";
import CriarPropriedadeController from "../../controllers/propreedadeControllers/CriarPropriedadesController";






const rota_propreedade=Router()
const controllerBuscarPropriedadePeloId=  new BuscarPropriedadesPeloIdController()
const controllerCriarPropriedade=  new CriarPropriedadeController()
const controllerBuscarTodasPropriedade=  new BuscarTodasPropriedadesController()
rota_propreedade.post("/criarPropriedades",multer_propriedades.array("images",5),controllerCriarPropriedade.execute)
rota_propreedade.get("/buscarTodasPropriedades",controllerBuscarTodasPropriedade.execute)
rota_propreedade.get("/buscarPropriedade/:idPropriedade",controllerBuscarPropriedadePeloId.execute)


export default rota_propreedade