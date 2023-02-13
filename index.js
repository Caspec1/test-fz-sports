import 'dotenv/config'
import express from 'express'
import dbConnect from './config/db.js'
import teamRoutes from './routes/team.js'
import teamsRoutes from './routes/teams.js'
import authRoutes from './routes/auth.js'

const app = express()
app.use(express.json())
dbConnect()

// Crea los endpoints
app.use('/api/team', teamRoutes)
app.use('/api/teams', teamsRoutes)
app.use('/api/auth', authRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`running on port ${PORT}`))
