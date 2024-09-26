import { Router } from "express";
import { multer_propriedades } from "../../../packages/multer/multer";
import ControllerPropreedade from "../../controllers/propreedadeControllers/PropreedadeController";
import { verifyImage } from "../../../middlewares/usuario_middlewares/google-vision";






const rota_propreedade=Router()
const controller=  new ControllerPropreedade()
rota_propreedade.post("/criarPropreedades",multer_propriedades.array("images",5),controller.criarPropreedade)
rota_propreedade.get("/buscarTodasPropriedades",controller.buscarTodasPropriedades)


export default rota_propreedade