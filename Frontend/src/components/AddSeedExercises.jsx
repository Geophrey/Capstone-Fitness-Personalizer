import data from "../../../Backend/data/exerciseData";
import { type2 } from "../../../Backend/data/trainingTypes";
import { units2 } from "../../../Backend/data/unitsOfMeasurement";
import { tempDivStyle, tempFormStyle } from "../styles/testStyles";
import { useRef } from "react";

export default function AddSeedData({ exercises, setExercises, trainingTypes, setTrainingTypes, units, setUnits }) {
    async function addAllExercises(e) {
        e.preventDefault();
        console.log(`Adding seed data to database...`);

        try {
            console.log(data);
            const exerciseResponse = await fetch(`http://localhost:7777/add/Exercises`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const exerciseResult = await exerciseResponse.json();

            console.log(type2);
            const tTypeResponse = await fetch(`http://localhost:7777/add/trainingTypes`, {
                method: "POST",
                body: JSON.stringify(type2),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const tTypeResult = await tTypeResponse.json();

            console.log(units2);
            const unitsResponse = await fetch(`http://localhost:7777/add/unitsOfMeasurement`, {
                method: "POST",
                body: JSON.stringify(units2),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const unitsResult = await unitsResponse.json();

            console.log(exerciseResult);
            console.log(tTypeResult);
            console.log(unitsResult);

            setExercises([...exercises, exerciseResult]);
            setTrainingTypes([...trainingTypes, tTypeResult]);
            setUnits([...units, unitsResult]);
        } catch (e) {
            console.error(e);
        }
    }
    console.log(`These are the training types saved in state:`);
    console.log(trainingTypes);
    console.log(`These are the units of measurement saved in state:`);
    console.log(units);
    console.log(`These are the exercises currently saved in state:`);
    console.log(exercises);
    return (
        <>
            <button onClick={addAllExercises}>
                Click to Add All Exercises to Database
            </button>
        </>
    );
}
