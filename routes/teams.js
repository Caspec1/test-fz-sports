import { Router } from "express"
import { obtenerJugadoresPorEquipoId, obtenerJugadoresPorPosicion } from "../controllers/teamsController.js"
import { comprobarAutenticacion } from "../middlewares/comprobarAutenticacion.js"

const router = Router()

// Rutas para jugadores, antes de la ruta se debe utilizar /api
// Para utilizar estas rutas se debe mandar el token de autenticación como Bearer Token
router.get('/:idTeam/players', comprobarAutenticacion, obtenerJugadoresPorEquipoId) // -> /api/:idTeam/players
router.get('/players/:position', comprobarAutenticacion, obtenerJugadoresPorPosicion) // -> /api/players/:position

export default router
