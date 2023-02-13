import { Router } from "express"
import { obtenerEquipos } from "../controllers/teamController.js"
import { comprobarAutenticacion } from "../middlewares/comprobarAutenticacion.js"

const router = Router()

// Rutas para obtener equipos, antes de la ruta se debe utilizar /api
// Para utilizar estas rutas se debe mandar el token de autenticación como Bearer Token
router.get('/', comprobarAutenticacion, obtenerEquipos) // -> /api/

export default router
