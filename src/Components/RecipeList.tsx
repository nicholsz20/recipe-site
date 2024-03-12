import { Recipe } from "../App";
import RecipeInstructions from "./RecipeInstructions";


interface RecipeListProps {
    data: Recipe[]
}

const RecipeList = ({data}: RecipeListProps) => {
    return (
        <div>
            {data.map((recipe) => <RecipeArray key={recipe.id} data={recipe}/>)}
        </div>
    )
}

interface RecipeArrayProps {
    data: Recipe;
}


const RecipeArray = ({data}: RecipeArrayProps) => {
    return(
        <div key={data.id}>
            <ul>
                <li>
                    {data.id}
                </li>
                    <h3>{data.title}</h3>
                
                <li>
                    <img src={data.image} />
                </li>
                <li>
                    <RecipeInstructions instructions={data.instructions} />
                </li>
                <li>
                    <RecipeInstructions instructions={data.summary} />
                </li>
            </ul>

        </div>
    )
}

export default RecipeList;