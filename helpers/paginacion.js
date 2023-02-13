// Realiza la paginación recibiendo el arreglo completo, la página a visitar y el límite requerido
export const paginationHelper = (arr, page, limit) => {
  if (page === 1) {
    const pagination = arr.slice(page - 1, limit)
    return pagination

  } else {
    const pagination = arr.slice(limit * page - limit, limit * page)
    return pagination
  }
}
