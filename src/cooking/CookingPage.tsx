import RecipeList from "./RecipeList";
import {ChangeEvent, useState} from "react";
import {Group} from "./Recipe";


export default function CookingPage() {
    const [ selectedGroups, setSelectedGroups] = useState(Object.keys(Group))
    const [ lovettLevel, setLovettLevel ] = useState(0);
    const handleGroupSelect = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setSelectedGroups(selectedGroups.concat([e.target.id]));
        } else {
            setSelectedGroups(selectedGroups.filter(s => s !== e.target.id));
        }
    }

    const handleLovettFilter = (e: ChangeEvent<HTMLInputElement>) => {
        const lvl = parseInt(e.target.value)
        if (lvl < 1) {
            setLovettLevel(0);
        } else if (lvl > 11) {
            setLovettLevel(11);
        } else {
            setLovettLevel(lvl);
        }

    }


    return (
        <div>
            <form>
                <h2>Course</h2>
                {Object.keys(Group).map(g => (
                    <label htmlFor={g}>
                        <input
                            type="checkbox"
                            id={g}
                            checked={selectedGroups.includes(g)}
                            onChange={handleGroupSelect}
                        />
                        {g}
                    </label>
                ))}

                <h2>Lovett's Requests</h2>
                <label htmlFor="lovettLevel">
                    Lovett Request Quality Level:
                    <input
                        type="number"
                        id="lovettLevel"
                        value={lovettLevel}
                        onChange={handleLovettFilter}
                    />

                </label>
            </form>
            <h1>Cooking Recipes</h1>
            <RecipeList
                foodGroups={selectedGroups}
                lovettLevel={lovettLevel}
            />

        </div>
    )
}


