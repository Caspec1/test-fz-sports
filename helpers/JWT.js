import jwt from 'jsonwebtoken'

export const generarJWT = async id => {
  const token = await jwt.sign({id}, process.env.JWT_SECRET, {
    expiresIn: '1d'
  })
  return token
}

export const verificarToken = async token => {
  const verificar = await jwt.verify(token, process.env.JWT_SECRET)
  return verificar
}
