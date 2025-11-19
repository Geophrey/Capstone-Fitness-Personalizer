import { useState } from "react";
import { useEffect } from "react";
import mockData from "../../Backend/data/exerciseMockData";

const tempDivStyle = {
    border: "2px solid black",
    width: "fit-content",
    height: "fit-content",
};

const tempFormStyle = { display: "flex", flexDirection: "column" };

function App() {
    const [exercises, setExercises] = useState(mockData);
    const [testState, setTestState] = useState()

    useEffect(() => {
        async function getAllExercises() {
            try {
                const response = await fetch("http://localhost:7777/exercises");
                const data = await response.json();

                console.log(data);
                // setExercises(data);
                console.log(exercises);
            } catch (error) {
                console.error("error found: " + error);
            }
        }

        getAllExercises();
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        console.log("no refresh");
        // setExercises(mockData)
        // console.log(exercises)
    }


    function handleClick(e) {
        setTestState(exercises.map((exercise) => (
                        <div key={exercise.id}>
                            <h4>{exercise.name}</h4>
                            <p>{exercise.description}</p>
                        </div>
                    )))
    }

    return (
        <>
            <div style={tempDivStyle}>
                <form onSubmit={handleSubmit} style={tempFormStyle}>
                    {/* <input type="text" required={true} />
                    <input type="text" required={true} />
                    <input type="text" required={true} />
                    <input type="text" required={true} />
                    <input type="number" required={true} /> */}
                    <button onClick={handleClick}>Click To Submit</button>
                </form>
                <div style={tempDivStyle}>
                    {testState}
                    {console.log(testState)}
                    {/* {exercises.map((exercise) => (
                        <div key={exercise.id}>
                            <h4>{exercise.name}</h4>
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
