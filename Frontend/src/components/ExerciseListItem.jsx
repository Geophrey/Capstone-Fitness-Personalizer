export default function ExerciseListItem({ exListItem }) {
    const tempStyle = {
        border: "1px solid black"
    }
    return (
        <div className="item" style={tempStyle}>
            <div className="name">
                <p><b>{exListItem.name}</b></p>
                <hr />
            </div>
            <div className="trainingTypes">
                {exListItem.trainingType.map((tType) => (
                    <span key={tType}> {tType} </span>
                ))}
            </div>
        </div>
    );
}
