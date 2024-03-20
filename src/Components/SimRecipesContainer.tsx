import { Link } from "react-router-dom";
import { SimRecipes, SimRecipesProps } from "./Types/GlobalTypes";

const SimRecipesContainer = ({ simData }: SimRecipesProps) => {
  console.log("MOUNTED SIM");
  const getImageUrl = (recipe: SimRecipes) => {
    return `https://spoonacular.com/recipeImages/${recipe.id}-636x393.${recipe.imageType}`;
  };
  return (
    <div>
      <Link to={`/search/${simData.id}`}>
        <img
          src={getImageUrl(simData)}
          alt={simData.title}
          className="cat-img"
        />
      </Link>
      <h3 className="cat-title">{simData.title}</h3>
    </div>
  );
};

export default SimRecipesContainer;
