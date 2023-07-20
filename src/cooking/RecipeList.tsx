import {CompareGroups, Item, Recipe} from "./Recipe";
import {ChangeEvent, Dispatch, SetStateAction, useEffect, useState} from "react";

interface RecipeListProps {
    foodGroups: string[],
    lovettLevel: number,
}

function RecipeList({foodGroups, lovettLevel}: RecipeListProps) {
    const allRecipesDefault: Recipe[] = [];
    const [ allRecipes, setAllRecipes ] = useState(allRecipesDefault);

    useEffect(() => {
        async function startFetching() {
            const recipesResp = await fetch(`http://abandonedfactory.net/games/sos/all_recipes_v2.json`);
            const r = await recipesResp.json() as Recipe[];
            if (!ignore) {
                // Sort the master list by level, then by group
                r.sort((a,b) => {
                    return a.level - b.level;
                })
                r.sort(CompareGroups);
                setAllRecipes(r);
            }
        }
        let ignore = false;
        startFetching().then(r => {});
        return () => {
            ignore = true;
        }
    }, [])
    let recipeSet = allRecipes.filter(r => foodGroups.includes(r.group))
    if (lovettLevel > 0) {
        recipeSet = recipeSet.filter(r => r.lovett === lovettLevel);
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
                    <td>{recipe.level}</td>
                    <td>
                        <ul>
                            {recipe.ingredients.map((ingredient:Item) => <li>{ingredient.name}</li>)}
                            <li>(topping) {recipe.topping.name}</li>
                        </ul>
                    </td>
                    <td>{recipe.how_to}</td>
                    <td>{recipe.lovett}</td>
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
            r.ingredients.forEach(item => {
                const existingCount =  shoppingList.get(item.name) ?? 0;
                shoppingList.set(item.name, existingCount+1);
            })
            if (includeToppings) {
                const existingCount =  shoppingList.get(r.topping.name) ?? 0;
                shoppingList.set(r.topping.name, existingCount+1);
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
