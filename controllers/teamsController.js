import sport from "../models/sports.js"
import { comprobarPosiciones } from "../helpers/comprobarPosiciones.js"
import { capitalizarPosicion } from "../helpers/capitalizarPosicion.js"
import { paginationHelper } from "../helpers/paginacion.js"

// Obtiene los jugadores según id ingresado en url
export const obtenerJugadoresPorEquipoId = async (req, res) => {
  const {idTeam} = req.params
  const position = req.query.position || ''
  try {
    // Obtiene los equipos de la base de datos
    const teams = await sport.find()

    // Validación del equipo
    const existeEquipo = teams[0].equipo.some(team => team.id === idTeam)
    if(!existeEquipo) return res.status(404).send({msg: 'No se encontró equipo con este id'})

    // Obtiene jugadores del equipo
    const jugadores = teams[0].equipo.find(team => team.id === idTeam).jugadores.jugador

    // En este punto realiza validaciones para filtrar por posición con query params
    if(position === '') {
      // Si no se ingresa query param entrega el arreglo total de jugadores
      return res.send(jugadores)
    }

    // Validaciones de la posición
    if(!comprobarPosiciones(position)) return res.status(400).send({msg: 'Posición no válida'})

    const posicion = capitalizarPosicion(position)

    // Realiza el filtro para entregar los jugadores del equipo en una posición específica
    const jugadoresFiltrados = jugadores.filter(jugador => jugador.rol.nombre === posicion)

    res.send(jugadoresFiltrados)
  } catch (error) {
    console.log(error)
    res.status(404).send({
      msg: 'No se encontraron jugadores',
    })
  }
}

// Obtiene jugadores por posición agrupados por su respectivo equipo
export const obtenerJugadoresPorPosicion = async (req, res) => {
  const { position } = req.params
  const page = +req.query.page
  const limit = +req.query.limit

  // Validaciones de la posición obtenida de los params
  if(!comprobarPosiciones(position)) return res.status(400).send({msg: 'Posición no válida'})
  const posicion = capitalizarPosicion(position)

  try {
    // Busca equipos en la base de datos
    const equiposDB = await sport.find()
    const equipos = equiposDB[0].equipo

    // Filtra jugadores por posición
    const jugadoresFiltrados = equipos.map(equipo => {
        const { jugadores: {jugador} } = equipo

        const jugadoresFiltrados = jugador.filter(jugador => jugador.rol.nombre === posicion)

        equipo.jugadores.jugador = jugadoresFiltrados

        return equipo
      })

      // A partir de este punto se hacen validaciones por query params
      if(isNaN(page) && isNaN(limit)) {
        return res.send(jugadoresFiltrados)
      }

      if(page < 1 || limit < 1) return res.status(400).send({msg: 'La página o el límite no pueden ser menor a 1'})

      // Se realiza paginación en función de los query params
      const pagination = paginationHelper(jugadoresFiltrados, page, limit)

      if(pagination.length === 0) return res.status(400).send({msg: 'No hay resultados para mostrar'})

      res.send(pagination)
  } catch (error) {
    res.status(404).send({msg: 'No se encontraron jugadores'})
  }
}
