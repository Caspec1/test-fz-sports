import bcryptjs from 'bcryptjs'

export const hashPassword = async password => {
  const hashedPassword = await bcryptjs.hash(password, 10)
  return hashedPassword
}

export const comprobarPassword= async (password, hash) => {
  const comprobarPassword = await bcryptjs.compare(password, hash)
  return comprobarPassword
}
