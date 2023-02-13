import { Router } from "express"
import { login, register } from '../controllers/authController.js'

const router = Router()

// Rutas para la autenticación, antes de la ruta se debe utilizar /api
router.post('/register', register) // -> /api/register
router.post('/login', login) // -> /api/login

export default router
