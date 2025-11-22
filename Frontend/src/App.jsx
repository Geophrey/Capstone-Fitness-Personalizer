import { useState, useEffect, useRef } from "react";
import mockData from "../../Backend/data/exerciseMockData";
import data from "../../Backend/data/exerciseData";
import type from "../../Backend/data/trainingTypes";
import AddOneExerciseForm from "./components/AddOneExerciseForm";
import { tempDivStyle, tempFormStyle } from "./styles/testStyles";
import AddSeedExercises from "./components/AddSeedExercises";

function App() {
    // const [exercises, setExercises] = useState(data);
    const [exercises, setExercises] = useState([]);
    // const oneNewExercise = useRef();
    const [testState, setTestState] = useState();

    useEffect(() => {
        async function getAllExercises() {
            try {
                const response = await fetch("http://localhost:7777/getExercises");
                const data = await response.json();

                // console.log(data);
                setExercises(data);
            } catch (error) {
                console.error("error found: " + error);
            }
        }

        getAllExercises();
    }, []);

    function handleShowAllExercises(e) {
        setTestState(
            exercises.map((exercise) => (
                <div key={exercise.name}>
                    <h2>{exercise.name}</h2>
                    <h3>Main Type of Training: "{exercise.trainingType}"</h3>
                    <h4>Basic How-To: "{exercise.tutorial}"</h4>
                </div>
            ))
        );
    }

    return (
        <>
            <div style={tempDivStyle}>
                <AddOneExerciseForm exercises={exercises} setExercises={setExercises} />
                <AddSeedExercises exercises={exercises} setExercises={setExercises} />
                <button onClick={handleShowAllExercises}>Click to Show All Exercises</button>
                <div style={tempDivStyle}>
                    {testState}
                    {/* {console.log(testState)} */}
                    {/* {exercises.map((exercise) => (
                        <div key={exercise.id}>
                            <h2>{exercise.name}</h2>
                            <p>{exercise.description}</p>
                        </div>
                    ))} */}
                </div>
            </div>
        </>
    );
}
// exercises.map((ex) => {
//     console.log(`id: ${ex.id}, name: ${ex.name}, description: ${ex.description}`)
// })
export default App;
