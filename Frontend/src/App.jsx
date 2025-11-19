import { useEffect } from "react";

function App() {
    useEffect(() => {
        async function serverTest() {
            try {
                const response = await fetch("http://localhost:7777/");

                const result = await response.json();

                console.log(result);
            } catch (error) {
                console.error("error found: " + error);
            }
        }

        serverTest()
    });

    return <></>;
}

export default App;
