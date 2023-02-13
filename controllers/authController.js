import { comprobarPassword, hashPassword } from '../helpers/hashContraseña.js'
import { generarJWT } from '../helpers/JWT.js'
import user from '../models/user.js'

export const register = async (req, res) => {
  const { email, password } = req.body

  const existeUsuario = await user.findOne({email})

  if(existeUsuario) return res.status(400).send({msg: 'El usuario ya existe'})

  try {
    const usuario = new user(req.body)
    usuario.password = await hashPassword(password)
    await usuario.save()
    res.send({msg: 'Usuario creado correctamente'})
  } catch (error) {
    res.status(500).send({msg: 'Problemas internos de la aplicación'})
  }
}
export const login = async (req, res) => {
  const { email, password } = req.body

  const usuario = await user.findOne({email})
  if(!usuario) return res.status(404).send({msg: 'Usuario no encontrado'})

  if(!await comprobarPassword(password, usuario.password)) return res.status(400).send({msg: 'Email o contraseña incorrectos'})

  const token = await generarJWT(usuario.id)

  res.send({
    nombre: usuario.name,
    email: usuario.email,
    token
  })
}

