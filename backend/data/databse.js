import mongoose from "mongoose";

export const connectDB = mongoose.connect(process.env.MONGO_URL, { dbName: "portalUsers" })
    .then(() => {
        console.log(`database connected`)
    }).catch((err) => {
        console.log(`ERROR: ${err}`)
    })