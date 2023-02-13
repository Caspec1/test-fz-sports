import bcryptjs from 'bcryptjs'

// Hashea la contraseña al momento de registrarse
export const hashPassword = async password => {
  const hashedPassword = await bcryptjs.hash(password, 10)
  return hashedPassword
}

// Comprueba si la contraseña ingresada coincide con la de la base de datos
export const comprobarPassword= async (password, hash) => {
  const comprobarPassword = await bcryptjs.compare(password, hash)
  return comprobarPassword
}
