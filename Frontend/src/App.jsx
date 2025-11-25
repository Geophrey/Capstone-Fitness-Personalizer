import { useState, useEffect, createContext, useRef } from "react";
import mockData from "../../Backend/data/exerciseMockData";
import data from "../../Backend/data/exerciseData";
import type from "../../Backend/data/trainingTypes";
import AddOneExerciseForm from "./components/AddOneExerciseForm";
import { tempDivStyle, tempFormStyle } from "./styles/testStyles";
import AddSeedExercises from "./components/AddSeedData";
import TrainingTypeSelection from "./components/TrainingTypeSelection";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import NavBar from "./components/NavBar";
import Calendar from "./components/Calendar";
import YourExercises from "./components/YourExercises";
import "./styles/AppStyle.css"


export const ExerciseData = createContext();

function App() {
    // const [exercises, setExercises] = useState(data);
    // const oneNewExercise = useRef();
    const [exercises, setExercises] = useState([]);
    const [trainingTypes, setTrainingTypes] = useState([]);
    const [units, setUnits] = useState([]);
    const [testState, setTestState] = useState();

    useEffect(() => {
        async function getAllExercises() {
            try {
                const response = await fetch(
                    "http://localhost:7777/get/Exercises"
                );
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
        <ExerciseData.Provider value={{exercises, setExercises}}>
            <div className="mainPage">
                <NavBar />
                <Routes>
                    {/* http://localhost:5173/homepage */}
                    <Route path="/homepage" element={<Homepage />} />
                    {/* http://localhost:5173/calendar */}
                    <Route path="/calendar" element={<Calendar />} />
                    {/* http://localhost:5173/exercises */}
                    <Route path="/exercises" element={<YourExercises />} />
                    {/* http://localhost:5173/addOneExercise */}
                    <Route
                        path="/addOneExercise"
                        element={
                            <AddOneExerciseForm
                                exercises={exercises}
                                setExercises={setExercises}
                            />
                        }
                    />
                    {/* http://localhost:5173/addSeedExercises */}
                    <Route
                        path="/addSeedExercises"
                        element={
                            <AddSeedExercises
                                exercises={exercises}
                                setExercises={setExercises}
                                trainingTypes={trainingTypes}
                                setTrainingTypes={setTrainingTypes}
                                units={units}
                                setUnits={setUnits}
                            />
                        }
                    />
                    {/* <div style={tempDivStyle}>NavBar</div>
                <div style={tempDivStyle}>
                    <AddOneExerciseForm
                        exercises={exercises}
                        setExercises={setExercises}
                    />
                    <AddSeedExercises
                        exercises={exercises}
                        setExercises={setExercises}
                        trainingTypes={trainingTypes}
                        setTrainingTypes={setTrainingTypes}
                        units={units}
                        setUnits={setUnits}
                    />
                    <button onClick={handleShowAllExercises}>
                    Click to Show All Exercises
                </button>
                </div>
                <TrainingTypeSelection trainingTypes={trainingTypes} setTrainingTypes={setTrainingTypes}/> */}
                </Routes>
            </div>
        </ExerciseData.Provider>
    );
}
// exercises.map((ex) => {
//     console.log(`id: ${ex.id}, name: ${ex.name}, description: ${ex.description}`)
// })
export default App;
