import ExerciseListItem from "./ExerciseListItem";

export default function ExercisesList({ exerciseList }) {
    console.log(exerciseList);
    return (
        <div className="listAndSearch">
            <div className="search">search bar</div>
            <div className="list">
                {exerciseList.map((exL) => (
                    <ExerciseListItem key={exL._id} exListItem={exL} />
                ))}
            </div>
        </div>
    );
}
