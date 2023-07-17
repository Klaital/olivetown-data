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

    return (
        <>
        <table>
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
            <ShoppingList
                trackedRecipeNames={selectedRecipes}
                recipeSet={recipeSet}
                setTrackedNames={setSelectedRecipes}
            />
        </>
        )
}


function ShoppingList(props: {trackedRecipeNames: string[], recipeSet: Recipe[], setTrackedNames:  Dispatch<SetStateAction<string[]>>}) {
    const [includeToppings, setIncludeToppings ] = useState(true);
    const handleIncludeToppingsSelect = (e: ChangeEvent<HTMLInputElement>) => {
        setIncludeToppings(e.target.checked);
    }
    const handleClearList = (e: ChangeEvent<HTMLInputElement>) => {
        props.setTrackedNames([]);
    }

    let shoppingList = new Map<string, number>();
    props.recipeSet.forEach(r => {
        if (props.trackedRecipeNames.includes(r.name)) {
            r.ingredients.forEach(i => {
                const existingCount =  shoppingList.get(i) ?? 0;
                shoppingList.set(i, existingCount+1);
            })
            if (includeToppings) {
                const existingCount =  shoppingList.get(r.topping) ?? 0;
                shoppingList.set(r.topping, existingCount+1);
            }
        }
    })
    return (
        <>
            <h1>Shopping List</h1>
            <form>
                <label htmlFor="includeToppings">
                    Include Toppings:
                    <input
                        type="checkbox"
                        checked={includeToppings}
                        onChange={handleIncludeToppingsSelect}
                    />
                </label>
                <input
                    type="submit"
                    value="Clear List"
                    onSubmit={handleClearList} />
            </form>
            <table>
            <thead>
                <tr>
                    <th>Ingredient</th>
                    <th>Qty Needed</th>
                    <th>For Recipes</th>
                </tr>
            </thead>
            <tbody>
            {Array.from(shoppingList).map(([item, qty]) => (
                <tr>
                    <td data-label="Ingredient">{item}</td>
                    <td data-label="Qty Needed">{qty}</td>
                    <td data-label="For Recipes"></td>
                </tr>
            ))}
            </tbody>
        </table>
    </>
    )
}



export default RecipeList;
