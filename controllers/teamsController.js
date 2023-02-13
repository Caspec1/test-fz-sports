import sport from "../models/sports.js"
import { comprobarPosiciones } from "../helpers/comprobarPosiciones.js"
import { capitalizarPosicion } from "../helpers/capitalizarPosicion.js"

export const obtenerJugadoresPorEquipoId = async (req, res) => {
  const {idTeam} = req.params
  try {
    const teams = await sport.find()
    const existeEquipo = teams[0].equipo.some(team => team.id === idTeam)

    if(!existeEquipo) return res.status(404).send({msg: 'No se encontraron jugadores'})

    const jugadores = teams[0].equipo.find(team => team.id === idTeam).jugadores.jugador

    res.send(jugadores)
  } catch (error) {
    console.log(error)
    res.status(404).send({
      msg: 'No se encontraron jugadores',
    })
  }
}

export const obtenerJugadoresPorPosicion = async (req, res) => {
  const { position } = req.params

  if(!comprobarPosiciones(position)) return res.status(400).send({msg: 'Posición no válida'})

  const posicion = capitalizarPosicion(position)

  try {
    const equiposDB = await sport.find()
    const equipos = equiposDB[0].equipo
    const jugadoresFiltrados = equipos.map(equipo => {
        const { jugadores: {jugador} } = equipo

        const jugadoresFiltrados = jugador.filter(jugador => jugador.rol.nombre === posicion)

        equipo.jugadores.jugador = jugadoresFiltrados

        return equipo
      })

    res.send(jugadoresFiltrados)
  } catch (error) {
    res.status(404).send({msg: 'No se encontraron jugadores'})
  }
}
