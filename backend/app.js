import express from 'express'
import {userRoute} from './routes/user.js'
export const app = express()

app.use(userRoute)