import { comprobarPassword, hashPassword } from '../helpers/hashContraseña.js'
import { generarJWT } from '../helpers/JWT.js'
import user from '../models/user.js'

// Registra un usuario
export const register = async (req, res) => {
  const { email, password } = req.body

  // Busca para comprobar si existe el usuario
  const existeUsuario = await user.findOne({email})
  if(existeUsuario) return res.status(400).send({msg: 'El usuario ya existe'})

  try {
    // Crea una nueva instancia de usuario
    const usuario = new user(req.body)

    // Hashea el password
    usuario.password = await hashPassword(password)
    await usuario.save()
    res.send({msg: 'Usuario creado correctamente'})
  } catch (error) {
    res.status(500).send({msg: 'Problemas internos de la aplicación'})
  }
}

// Inicia sesión a un usuario
export const login = async (req, res) => {
  const { email, password } = req.body

  // Busca el usuario en la base de datos
  const usuario = await user.findOne({email})
  if(!usuario) return res.status(404).send({msg: 'Usuario no encontrado'})

  // Comprueba credenciales ingresadas
  if(!await comprobarPassword(password, usuario.password)) return res.status(400).send({msg: 'Email o contraseña incorrectos'})

  // Genera un jwt para ser utilizado en las peticiones protegidas
  const token = await generarJWT(usuario.id)

  res.send({
    nombre: usuario.name,
    email: usuario.email,
    token
  })
}

