import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <>
            <header className="navbar">
                <Link to="/homepage">
                <p>Home</p>
                </Link>

                <Link to="/calendar">
                <p>Your Calendar</p>
                </Link>

                <Link to="/exercises">
                <p>Your Exercises</p>
                </Link>

                <Link to="/about">
                <p>About</p>
                </Link>

                <Link to="/addOneExercise">
                <p>Add an Exercise</p>
                </Link>

                <Link to="/addSeedExercises">
                <p>Load Seeds</p>
                </Link>
            </header>
        </>
    )
}