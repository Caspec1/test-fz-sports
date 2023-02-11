import sports from "../models/sports.js"

export const obtenerEquipos = async (req, res) => {
  try {
    const teams = await sports.find()
    const equipos = teams[0].equipo
    res.send(equipos)
  } catch (error) {
    res.status(404).send({msg: 'No se encontraron datos'})
  }
}
