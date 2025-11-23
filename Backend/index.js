import express from "express";
import "dotenv/config";
import cors from "cors";
import databaseConnect from "./database.js";
import Exercise from "./models/exercisesSchema.js";
// import data from "./data/exerciseData.js";
import postRouter from "./routes/postRoutes.js";

const app = express();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

//http://localhost:7777/
app.get(`/`, (req, res) => {
    res.json(`Hello World (from server)`);
});

app.use(`/add`, postRouter);

//http://localhost:7777/getExercises
app.get(`/getExercises`, async (req, res) => {
    try {
        const exercises = await Exercise.find({});
        res.status(200).json(exercises);
    } catch (e) {
        console.log(e);
        console.error(e);
        res.status(400).json({ error: e.message });
    }
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
    databaseConnect();
});
