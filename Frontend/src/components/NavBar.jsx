import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <header className="navbar">
                <Link to="/homepage">
                    <button>Home</button>
                </Link>

                <Link to="/calendar">
                    <button>Your Calendar</button>
                </Link>

                <Link to="/exercises">
                    <button>Your Exercises</button>
                </Link>

                <Link to="/about">
                    <button>About</button>
                </Link>

                <Link to="/addOneExercise">
                    <button>Add an Exercise</button>
                </Link>

                <Link to="/addSeedExercises">
                    <button>Load Seeds</button>
                </Link>
            </header>
        </>
    );
}
