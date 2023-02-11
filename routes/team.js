import { Router } from "express"
import { obtenerEquipos } from "../controllers/teamController.js"
const router = Router()

router.get('/', obtenerEquipos)

export default router
