import jwt from 'jsonwebtoken'

// Genera un token para utilizarlo al momento de realizar una petición autenticada
export const generarJWT = async id => {
  const token = await jwt.sign({id}, process.env.JWT_SECRET, {
    expiresIn: '1d'
  })
  return token
}

// Verifica y decodifica el token para obtener los datos del usuario y buscarlo en la DB
export const verificarToken = async token => {
  const verificar = await jwt.verify(token, process.env.JWT_SECRET)
  return verificar
}
