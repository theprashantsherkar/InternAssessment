import { app } from "./app.js";
import express from 'express'
import { connectDB } from "./data/database.js";

connectDB()

app.listen(process.env.PORT, () => {
    console.log(`the server is running at PORT: ${process.env.PORT}`)
})



