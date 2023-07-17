import {Recipe} from "./Recipe";
import {ChangeEvent, Dispatch, SetStateAction, useState} from "react";
import {MOCK_RECIPES} from "./MockRecipes";

interface RecipeListProps {
    foodGroups: string[],
    lovettLevel: number,
}

function RecipeList({foodGroups, lovettLevel}: RecipeListProps) {
    let recipeSet = MOCK_RECIPES.filter(r => foodGroups.includes(r.group))
    if (lovettLevel > 0) {
        recipeSet = recipeSet.filter(r => r.LovettStars === lovettLevel);
    }


    const initialRecipes: string[] = [];
    const [ selectedRecipes, setSelectedRecipes ] = useState(initialRecipes);
    const handleTrackRecipeSelect = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setSelectedRecipes(selectedRecipes.concat([e.target.id]));
        } else {
            setSelectedRecipes(selectedRecipes.filter(s=> s !== e.target.id));
        }
    }

    return <table>
        <thead>
        <tr>
            <th>Track</th>
            <th>Recipe</th>
            <th>Group</th>
            <th>Rank</th>
            <th>Ingredients</th>
            <th>Acquisition</th>
            <th>Lovett</th>
        </tr>
        </thead>
        <tbody>
        {recipeSet.map((recipe) => (
            <tr>
                <td>
                    <input type="checkbox"
                           id={recipe.name}
                           onChange={handleTrackRecipeSelect}
                           checked={selectedRecipes.includes(recipe.name)}
                    />
                </td>
                <td>{recipe.name}</td>
                <td>{recipe.group}</td>
                <td>{recipe.rank}</td>
                <td>
                    <ul>
                        {recipe.ingredients.map((ingredient:string) => <li>{ingredient}</li>)}
                        <li>(topping) {recipe.topping}</li>
                    </ul>
                </td>
                <td>{recipe.howTo}</td>
                <td>{recipe.LovettStars}</td>
            </tr>
        ))}
        </tbody>
    </table>
}

export default RecipeList;
