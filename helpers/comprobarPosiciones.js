// Comprueba si es una de las posiciones admitidas por la base de datos
import { posiciones } from '../fixtures/posiciones.js'

export const comprobarPosiciones = position => {
  return posiciones.includes(position.toLowerCase())
}
