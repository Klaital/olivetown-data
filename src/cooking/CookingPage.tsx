import {MOCK_RECIPES} from "./MockRecipes";
import RecipeList from "./RecipeList";


function CookingPage() {
    return (
        <div>
            <h1>Cooking Recipes</h1>
            <RecipeList recipes={MOCK_RECIPES} />
        </div>
    )
}

export default CookingPage;
