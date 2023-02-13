import { Router } from "express"
import { obtenerJugadoresPorEquipoId, obtenerJugadoresPorPosicion } from "../controllers/teamsController.js"
import { comprobarAutenticacion } from "../middlewares/comprobarAutenticacion.js"

const router = Router()

router.get('/:idTeam/players', comprobarAutenticacion, obtenerJugadoresPorEquipoId)
router.get('/players/:position', comprobarAutenticacion, obtenerJugadoresPorPosicion)

export default router
