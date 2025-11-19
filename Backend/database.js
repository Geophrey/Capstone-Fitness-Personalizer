import mongoose from "mongoose";

async function databaseConnect() {
    try {
        await mongoose.connect(process.env.connectionStr)
        console.log("Successfully connected to mongoDB")
    } catch (e) {
        console.log(e)
        console.error(e)
    }
}

export default databaseConnect