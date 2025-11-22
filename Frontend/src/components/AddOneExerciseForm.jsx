import { tempDivStyle, tempFormStyle } from "../styles/testStyles";
import { useRef } from "react";

export default function AddOneExerciseForm({ exercises, setExercises }) {
    const oneNewExercise = useRef();

    async function handleSubmit(e) {
        e.preventDefault();
        let formData = new FormData(oneNewExercise.current);
        let useableData = Object.fromEntries(formData.entries());
        console.log(useableData);

        const newExercise = {
            name: useableData.name,
            trainingType: [useableData.type],
            tutorial: useableData.tutorial,
            measurementUnits: [useableData.unit],
            intensity: parseInt(useableData.intensity),
        };

        console.log("new exercise created");
        console.log(newExercise);

        try {
            console.log("Adding new exercise to database...");
            const response = await fetch(`http://localhost:7777/addExercises`, {
                method: "POST",
                body: JSON.stringify(newExercise),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const result = await response.json();

            console.log(result);
            console.log("Adding new exercise to exercises state...");
            setExercises([...exercises, result]);
        } catch (e) {
            console.error(e);
        }
    }
    console.log(`These are the exercises currently saved in state:`);
    console.log(exercises)
    return (
        <form
            onSubmit={handleSubmit}
            ref={oneNewExercise}
            style={tempFormStyle}
        >
            <input type="text" name="name" required={true} />
            <input type="text" name="type" required={true} />
            <input type="text" name="tutorial" required={true} />
            <input type="text" name="unit" required={true} />
            <input type="number" name="intensity" required={true} />
            <input type="text" name="notes" required={false} />
            <input type="url" name="image" required={false} />
            <button>Click To Submit</button>
        </form>
    );
}
