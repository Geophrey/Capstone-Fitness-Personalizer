import { useState } from "react";
import ExerciseListItem from "./ExerciseListItem";

export default function ExercisesList({ exerciseList, handleClick }) {
    console.log(exerciseList);

    const [searchMethod, setSearchMethod] = useState();
    const [search, setSearch] = useState();

    function handleChange(e) {
        if (e.target.tagName === "SELECT") {
            //to set the search method
            console.log(`Seach method set to ${e.target.value}`)
            setSearchMethod(e.target.value);
        } else {
            //to set the textbox search value
            console.log(`Seach value set to ${e.target.value}`)
            setSearch(e.target.value);
        }
    }

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
                {exerciseList.map((exL) => (
                    <ExerciseListItem
                        key={exL._id}
                        exListItem={exL}
                        onClick={handleClick}
                    />
                ))}
            </div>
            {/* <button className="select">View This Exercise</button> */}
        </div>
    );
}
