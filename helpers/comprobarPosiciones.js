import { posiciones } from '../fixtures/posiciones.js'

export const comprobarPosiciones = position => {
  return posiciones.includes(position.toLowerCase())
}
