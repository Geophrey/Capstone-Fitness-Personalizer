import { useEffect } from "react";

function App() {
    useEffect(() => {
        async function serverTest() {
            try {
                const response1 = await fetch("http://localhost:7777/");
                const result1 = await response1.json();

                const response2 = await fetch(
                    "http://localhost:7777/exercises"
                );
                const result2 = await response2.json();

                console.log(result1);
                console.log(result2);
            } catch (error) {
                console.error("error found: " + error);
            }
        }

        serverTest();
    });

    return <></>;
}

export default App;
