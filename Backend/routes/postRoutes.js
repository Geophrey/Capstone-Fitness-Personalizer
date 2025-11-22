import express from "express"
import Exercise from "../models/exercisesSchema.js";

const router = express.Router()

export const addExercisesEndpoint = `/add/Exercises` //could try to make a variable to hold the endpoint if time permits

//http://localhost:7777/add/Exercises
router.post(`/Exercises`, async (req, res) => {
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

export default router