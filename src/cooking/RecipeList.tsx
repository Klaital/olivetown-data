import {Recipe} from "./Recipe";

interface RecipeListProps {
    recipes: Recipe[];
}

function RecipeList({recipes}: RecipeListProps) {
    return <table>
        <thead>
        <tr>
            <td>Recipe</td>
            <td>Group</td>
            <td>Rank</td>
            <td>Ingredients</td>
            <td>Acquisition</td>
        </tr>
        </thead>
        <tbody>
        {recipes.map((recipe) => (
            <tr>
                <td>{recipe.name}</td>
                <td>{recipe.group}</td>
                <td>{recipe.rank}</td>
                <td>
                    <ul>
                        {recipe.ingredients.map((ingredient) => (
                            <li>{ingredient}</li>
                        ))}
                        <li>(topping) {recipe.topping}</li>
                    </ul>
                </td>
                <td>{recipe.howTo}</td>
            </tr>
        ))}
        </tbody>
    </table>
}

export default RecipeList;
