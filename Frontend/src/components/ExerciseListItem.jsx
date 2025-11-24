export default function ExerciseListItem({ exListItem }) {
    return (
        <div className="item">
            <div className="name">
                <p>{exListItem.name}</p>
            </div>
            <div className="trainingTypes">
                {exListItem.trainingType.map((tType) => (
                    <p key={tType}>{tType}</p>
                ))}
            </div>
        </div>
    );
}
