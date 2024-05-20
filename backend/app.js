import express from 'express'
import userRoute from './routes/user.js'
import { config } from 'dotenv'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import cors from 'cors'


export const app = express()


config({
    path: "./data/config.env"
})


app.use(cors({
    origin: "*",  
   
    optionsSuccessStatus: 200,
}))


app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
    express.urlencoded({ extended: true })
);

app.use('/users', userRoute)  

