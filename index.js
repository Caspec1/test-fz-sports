import 'dotenv/config'
import express from 'express'
import dbConnect from './config/db.js'
import teamRoutes from './routes/team.js'
import teamsRoutes from './routes/teams.js'

const app = express()
app.use(express.json())
dbConnect()

app.use('/api/team', teamRoutes)
app.use('/api/teams', teamsRoutes)

const PORT = 3000

app.listen(PORT, () => console.log(`running on port ${PORT}`))
