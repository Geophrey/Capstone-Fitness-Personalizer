import { useState, useEffect, useRef } from "react";
import mockData from "../../Backend/data/exerciseMockData";
import data from "../../Backend/data/exerciseData";
import type from "../../Backend/data/trainingTypes";
import AddOneExerciseForm from "./components/AddOneExerciseForm";
import { tempDivStyle, tempFormStyle } from "./styles/testStyles";

function App() {
    // const [exercises, setExercises] = useState(data);
    const [exercises, setExercises] = useState(data);
    // const oneNewExercise = useRef();
    const [testState, setTestState] = useState();

    // useEffect(() => {
    //     async function getAllExercises() {
    //         try {
    //             const response = await fetch("http://localhost:7777/exercises");
    //             const data = await response.json();

    //             console.log(data);
    //             // setExercises(data);
    //             console.log(exercises);
    //         } catch (error) {
    //             console.error("error found: " + error);
    //         }
    //     }

    //     getAllExercises();
    // }, []);

    // async function handleSubmit(e) {
    //     e.preventDefault();
    //     // console.dir(e.target)
    //     let formData = new FormData(oneNewExercise.current);
    //     let useableData = Object.fromEntries(formData.entries());
    //     console.log(useableData);
    //     // console.log(test);

    //     const newExercise = {
    //         name: useableData.name,
    //         trainingType: [useableData.type],
    //         tutorial: useableData.tutorial,
    //         measurementUnits: [useableData.unit],
    //         intensity: parseInt(useableData.intensity),
    //     };

    //     console.log(newExercise);
    //     // setExercises(mockData)
    //     // console.log(exercises)

    //     try {
    //         console.log(newExercise);
    //         const response = await fetch(`http://localhost:7777/addExercises`, {
    //             method: "POST",
    //             body: JSON.stringify(newExercise),
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         });
    //         const result = await response.json();

    //         console.log(result);

    //         setExercises([...exercises, result]);
    //     } catch (e) {
    //         console.error(e);
    //     }
    // }

    async function addAllExercises(e) {
        e.preventDefault();
        // console.log(`Previous exercises state: ${exercises}`);
        // setExercises(data)
        // console.log(data)
        console.log(`Adding exercise data to database...`);

        try {
            console.log(exercises);
            const response = await fetch(`http://localhost:7777/addExercises`, {
                method: "POST",
                body: JSON.stringify(exercises),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const result = await response.json();

            console.log(result);

            // setExercises([...exercises, result]);
        } catch (e) {
            console.error(e);
        }
    }

    function handleTest(e) {
        // setTestState(
        //     exercises.map((exercise) => (
        //         <div key={exercise.name}>
        //             <h2>{exercise.name}</h2>
        //             <h3>Main Type of Training: "{exercise.trainingType[0]}"</h3>
        //             <h4>Basic How-To: "{exercise.tutorial}"</h4>
        //         </div>
        //     ))
        // );
    }

    return (
        <>
            <div style={tempDivStyle}>
                {/* <form
                    onSubmit={handleSubmit}
                    ref={oneNewExercise}
                    style={tempFormStyle}
                >
                    <input type="text" name="name" required={true} />
                    <input type="text" name="type" required={true} />
                    <input type="text" name="tutorial" required={true} />
                    <input type="text" name="unit" required={true} />
                    <input type="number" name="intensity" required={true} />
                    <button onClick={handleTest}>Click To Submit</button>
                </form> */}
                <button>tesetestest</button>
                {/* {console.log(handleSubmit)} */}
                <AddOneExerciseForm/>
                <button onClick={addAllExercises}>
                    Click to Add All Exercises to Database
                </button>
                <div style={tempDivStyle}>
                    {/* {testState}
                    {console.log(testState)} */}
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
