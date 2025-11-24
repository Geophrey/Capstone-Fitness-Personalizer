import { useState, useContext, useEffect } from "react";
import { ExerciseData } from "../App";

export default function YourExercises() {
    const spanStyle = {
        display: "inline-block",
        border: "2px solid black",
        backgroundColor: "grey",
        width: "fit-content",
        height: "fit-content",
    };

    const [exerciseInfo, setExerciseInfo] = useState({});

    const stateStuff = useContext(ExerciseData)
    const allExercises = stateStuff.exercises
    const setAllExercises = stateStuff.setExercises

    useEffect(() => {
            async function showAllExercises() {
                try {
                    const response = await fetch(
                        "http://localhost:7777/get/Exercises"
                    );
                    const data = await response.json();
    
                    // console.log(data);
                    setAllExercises(data);
                } catch (error) {
                    console.error("error found: " + error);
                }
            }
    
            showAllExercises();
        }, []);

    console.log(allExercises)

    return (
        <div className="display">
            <span style={spanStyle} className="exerciseInfo">
                <div>exercise</div>
                <div>info</div>
                <div>here</div>
            </span>
            <span style={spanStyle} className="exerciseSearch">
                <div>search and</div>
                <div>simple view section</div>
                <div>for exercises here</div>
            </span>
            <span style={spanStyle} className="editOptions">
                <div>add, edit, or delete</div>
                <div>exercise options</div>
                <div>here</div>
            </span>
        </div>
    );
}
