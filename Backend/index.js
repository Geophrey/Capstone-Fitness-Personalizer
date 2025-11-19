import express from "express";
import "dotenv/config";
import cors from "cors"
import databaseConnect from "./database.js";
import Exercise from "./models/exercises.js";

const app = express();

const PORT = process.env.PORT

app.use(cors())

//http://localhost:7777/
app.get(`/`, (req, res) => {
    res.json(`Hello World (from server)`);
});

//http://localhost:7777/exercises
app.get(`/exercises`, async (req, res) => {
    try {
        const exercises = await Exercise.find({})
        res.status(200).json(exercises)
    } catch (e) {
        console.log(e)
        console.error(e)
        res.status(400).json({error: e.message})
    }
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
    databaseConnect()
});
