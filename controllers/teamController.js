import { paginationHelper } from "../helpers/paginacion.js"
import sports from "../models/sports.js"

// Obtiene los equipos
export const obtenerEquipos = async (req, res) => {
  // Obtiene página y límite transformado a número para utilizar en slice
  const page = +req.query.page
  const limit = +req.query.limit

  try {
    // Obtiene los equipos de la BD
    const teams = await sports.find()
    const equipos = teams[0].equipo

    // Validaciones de página y límite
    if(isNaN(page) && isNaN(limit)) {
      return res.send(equipos)
    }

    if(page < 1 || limit < 1) return res.status(400).send({msg: 'La página o el límite no pueden ser menor a 1'})

    // Genera la paginación
    const pagination = paginationHelper(equipos, page, limit)

    if(pagination.length < 1) return res.status(400).send({msg: 'No hay resultados para mostrar'})

    res.send(pagination)

  } catch (error) {
    res.status(404).send({msg: 'No se encontraron datos'})
  }
}
