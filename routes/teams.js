import { Router } from "express"
import { obtenerJugadoresPorEquipoId, obtenerJugadoresPorPosicion } from "../controllers/teamsController.js"
const router = Router()

router.get('/:idTeam/players', obtenerJugadoresPorEquipoId)
router.get('/players/:position', obtenerJugadoresPorPosicion)

export default router
