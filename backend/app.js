import express from 'express'
import userRoute from './routes/user.js'
import { config } from 'dotenv'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

export const app = express()
config({
    path:"./data/config.env"
})



app.use(express.json())
app.use('/users', userRoute)  
app.use(
    express.urlencoded({ extended: true })
);
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
