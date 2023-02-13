import { Router } from "express"
import { obtenerEquipos } from "../controllers/teamController.js"
import { comprobarAutenticacion } from "../middlewares/comprobarAutenticacion.js"

const router = Router()

router.get('/', comprobarAutenticacion, obtenerEquipos)

export default router
