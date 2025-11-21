import { tempDivStyle, tempFormStyle } from "../styles/testStyles"

export default function AddOneExerciseForm() {
    <form onSubmit={handleSubmit} style={tempFormStyle}>
                        <input ref={exerciseName} type="text" required={true} />
                        <input type="text" required={true} />
                        <input type="text" required={true} />
                        <input type="number" required={true} />
                        <button onClick={handleTest}>Click To Submit</button>
                    </form>
}