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
        <div key={data.id} className="text-center">
            <ul>
                <div>
                    <span hidden>{data.id}</span>
                    <h3>{data.title}</h3>
                </div>       
                <div>
                    <img src={data.image} />
                </div>
                <div>
                    <RecipeInstructions instructions={data.instructions} />
                </div>
                <div>
                    <RecipeInstructions instructions={data.summary} />
                </div>
            </ul>

        </div>
    )
}

export default RecipeList;