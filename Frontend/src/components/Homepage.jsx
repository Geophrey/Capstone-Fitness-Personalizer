export default function Homepage() {
    return (
        <div className="homepage">
            <section className="greeting">
                <h1>Welcome, Dude!</h1>
                <h2>Heres your most upcoming workout:</h2>
            </section>
            <section className="workouts">
                <div className="workout">
                    <h3 className="name">Monday; 7AM Resistance Training</h3>
                    <h4 className="focus">
                        This workout is focused on: Strength & Muscular
                        Endurance
                    </h4>
                    <h3>Below are your routines:</h3>
                    <p style={{ fontWeight: "bold" }}>Barbell Bent Over Row</p>
                    <p>4 X 6 X 160</p>
                    <p>Difficulty: 7</p>
                    <p style={{ fontWeight: "bold" }}>Barbell Back Squat</p>
                    <p>4 X 4 X 250</p>
                    <p>Difficulty: 7</p>
                    <p style={{ fontWeight: "bold" }}>Barbell Flat Bench Press</p>
                    <p>4 X 3 X 200</p>
                    <p>Difficulty: 8</p>
                    <h4>
                        You've set that this workout should last for: <b>1 Hour</b>
                    </h4>
                    <h4>This routine has a difficulty level of: <b>7.3</b></h4>
                    <h5>Notes: use straps only if you can't complete the reps without them</h5>
                </div>
            </section>
        </div>
    );
}
