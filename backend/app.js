import express from 'express'
import userRoute from './routes/user.js'
import { config } from 'dotenv'

export const app = express()
config({
    path:"./data/config.env"
})

app.use(express.json())
app.use('/users',userRoute)  