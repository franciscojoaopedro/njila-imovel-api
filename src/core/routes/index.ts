import {Router} from 'express';
import rota_propreedade from './routes_propreedades';
import rota_usuario from './routes_usuario';



const routes=Router()

routes.use("/usuarios",rota_usuario)
routes.use("/propriedades",rota_propreedade)

export default routes