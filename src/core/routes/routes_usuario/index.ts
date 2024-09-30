
import {Router} from 'express';
import ControllersUsuarios from '../../controllers/usuarioControllers/UsuarioControllers';
import validarDados from '../../../middlewares/usuario_middlewares/validate_middlewares_usuario';
import { usuario_schema } from '../../domain/entities/model/shemas/user_shemas';
import { multer_usuarios } from '../../../packages/multer/multer';



const rota_usuario=Router()




const controllersUsuarios=  new ControllersUsuarios()
rota_usuario.post("/registarUsuario" ,multer_usuarios.single("avatar"),controllersUsuarios.execute)
// RoutesUsuario.post("/login",controllersUsuarios.criarUsuario)
rota_usuario.get("/buscarUsuarioPeloId/:idUsuario",controllersUsuarios.buscarUsuarioPorId)


export default rota_usuario
