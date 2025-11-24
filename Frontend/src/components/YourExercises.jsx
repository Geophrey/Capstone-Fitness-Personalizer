export default function YourExercises() {
    const spanStyle = {
        display: "inline-block",
        border: "2px solid black",
        backgroundColor: "grey",
        width: "fit-content",
        height: "fit-content"
    }
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
    )
}
