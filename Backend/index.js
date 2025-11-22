import express from "express";
import "dotenv/config";
import cors from "cors";
import databaseConnect from "./database.js";
import Exercise from "./models/exercisesSchema.js";
import data from "./data/exerciseData.js";

const app = express();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json())

//http://localhost:7777/
app.get(`/`, (req, res) => {
    res.json(`Hello World (from server)`);
});

//http://localhost:7777/addExercises
app.post(`/addExercises`, async (req, res) => {
    try {
        const newExercises = await Exercise.create(req.body);
        console.log("Basic exercise data has been added to the database");
        console.log(newExercises)

        res.status(200).json(newExercises);
    } catch (e) {
        console.error(e);
        res.status(400).json({ error: e.message });
    }
});

// //http://localhost:7777/addSeedExercises
// app.post(`/addSeedExercises`, async (req, res) => {
//     try {
//         const newExercises = await Exercise.create(data);
//         console.log("Basic exercise data has been added to the database");
//         console.log(newExercises)

//         res.status(200).json(newExercises);
//     } catch (e) {
//         console.error(e);
//         res.status(400).json({ error: e.message });
//     }
// });

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
