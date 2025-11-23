import express from "express";
import Exercise from "../models/exercisesSchema.js";
import Training from "../models/trainingTypeSchema.js";

const router = express.Router();

export const addExercisesEndpoint = `/add/Exercises`; //could try to make a variable to hold the endpoint if time permits

//http://localhost:7777/add/Exercises
//Adds exercises to the database whether multiple exercises or a single one
router.post(`/Exercises`, async (req, res) => {
    try {
        const newExercises = await Exercise.create(req.body);
        console.log("Exercise data has been added to the database");
        console.log(newExercises);

        res.status(200).json(newExercises);
    } catch (e) {
        console.error(e);
        res.status(400).json({ error: e.message });
    }
});

//http://localhost:7777/add/trainingTypes
//Adds training types to the database
router.post(`/trainingTypes`, async (req, res) => {
    try {
        const newTrainingType = await Training.create(req.body);
        console.log("Training Type data has been added to the database");
        console.log(newTrainingType);

        res.status(200).json(newTrainingType);
    } catch (e) {
        console.error(e);
        res.status(400).json({ error: e.message });
    }
});

export default router;
