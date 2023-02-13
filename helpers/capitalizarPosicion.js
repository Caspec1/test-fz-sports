// Recibe la posición entregada en la url y
// la transforma para que coincida con las posiciones de la base de datos

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
