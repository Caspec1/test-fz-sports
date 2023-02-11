export const capitalizarPosicion = posicion => {
  const pos = posicion.toLowerCase()
  if(pos === 'dt') {
    return pos.toUpperCase()
  } else {
    const primeraLetra = posicion.slice(0, 1).toUpperCase()
    const restoPosicion = posicion.slice(1).toLowerCase()
    return primeraLetra + restoPosicion
  }
}
