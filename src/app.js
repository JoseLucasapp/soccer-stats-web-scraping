import express from 'express'
import { routes } from './config/routes'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

const router = express.Router()

app.use(express.json())
app.use(cors())
app.use(router)

app.get('/', (req, res) => {
    res.status(200).json({ msg: 'You need to pass the game code' })
})

routes(router)

app.listen(3000)