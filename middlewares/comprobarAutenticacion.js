import { verificarToken } from "../helpers/JWT.js"
import user from '../models/user.js'

// Comprueba autenticación cada vez que se hace una petición que se requiera estar logueado
export const comprobarAutenticacion = async (req, res, next) => {

  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    const token = req.headers.authorization.split(' ')[1]
    const { id } = await verificarToken(token)

    try {
      const usuario = await user.findById(id, 'name email')
      req.usuario = usuario
      next()
    } catch (error) {
      res.status(401).send({msg: 'Token no válido'})
    }

  } else {
    res.status(401).send({msg: 'Token no válido'})
  }

}
