import express from "express"
import Exercise from "../models/exercisesSchema.js";

const router = express.Router()

//http://localhost:7777/get/Exercises
//get all exercises from the database
router.get(`/Exercises`, async (req, res) => {
    try {
        const exercises = await Exercise.find({});
        res.status(200).json(exercises);
    } catch (e) {
        console.log(e);
        console.error(e);
        res.status(400).json({ error: e.message });
    }
});

export default router