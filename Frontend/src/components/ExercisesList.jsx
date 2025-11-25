import { useState } from "react";
import ExerciseListItem from "./ExerciseListItem";

export default function ExercisesList({ exerciseList, handleClick }) {
    console.log(exerciseList);

    const [searchMethod, setSearchMethod] = useState();
    let [search, setSearch] = useState();
    const [searchList, setSearchList] = useState(exerciseList);

    // let searchList = [];

    function handleChange(e) {
        if (e.target.tagName === "SELECT") {
            //to set the search method
            console.log(`Search method set to ${e.target.value}`);
            setSearchMethod(e.target.value);
        } else {
            //to set the textbox search value
            console.log(`Search value set to ${e.target.value}`);
            setSearch(e.target.value);
        }
        exerciseSearch(searchMethod, search);
    }

    function exerciseSearch(searchMethod, search) {
        setSearchList(
            exerciseList.filter((exLI) => {
                switch (searchMethod) {
                    case "name":
                        console.log("search method is name");
                        return exLI.name.includes(search);

                    case "intensity":
                        console.log("search method is intensity");
                        return exLI.intensity == search;

                    case "trainingType":
                        console.log("search method is type");
                        return exLI.trainingType.some((type) =>
                            type.includes(search)
                        );

                    case "unit":
                        console.log("search method is unit");
                        return exLI.measurementUnits.some((units) =>
                            units.includes(search)
                        );

                    default:
                        console.log("search method is name");
                        return exLI.name.includes(search);
                }
            })
        );
    }

    console.log(searchList);

    return (
        <div className="listAndSearch">
            <span>
                <label htmlFor="category">Category</label>
                <select name="category" onChange={handleChange}>
                    <option value="name">Name</option>
                    <option value="intensity">Intensity</option>
                    <option value="trainingType">Training Type</option>
                    <option value="unit">Unit</option>
                </select>
            </span>
            <span className="search">
                <input
                    type="text"
                    name="searchTextBox"
                    placeholder="Search for Exercises!"
                    onChange={handleChange}
                />
            </span>
            <div className="list">
                {searchList.map((exLI) => (
                    <ExerciseListItem
                        key={exLI._id}
                        exListItem={exLI}
                        onClick={handleClick}
                    />
                ))}
            </div>
            {/* <button className="select">View This Exercise</button> */}
        </div>
    );
}
