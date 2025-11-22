import data from "../../../Backend/data/exerciseData";
import { tempDivStyle, tempFormStyle } from "../styles/testStyles";
import { useRef } from "react";

export default function AddSeedExercises({ exercises, setExercises }) {
    async function addAllExercises(e) {
        e.preventDefault();
        console.log(`Adding exercise data to database...`);

        try {
            console.log(exercises);
            const response = await fetch(`http://localhost:7777/addExercises`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const result = await response.json();
            console.log(result);
            setExercises([...exercises, result]);
        } catch (e) {
            console.error(e);
        }
    }
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
