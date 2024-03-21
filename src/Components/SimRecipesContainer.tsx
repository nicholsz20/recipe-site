//Purpose of this file is to display the similar recipes whena  user clicks into one

import { Link } from "react-router-dom";
import { SimRecipes, SimRecipesProps } from "./Types/GlobalTypes";

const SimRecipesContainer = ({ simData }: SimRecipesProps) => {
  console.log("MOUNTED SIM");

  //getImageUrl uses the id and image type to form a url to grab an image since the api doesnt provide one
  const getImageUrl = (recipe: SimRecipes) => {
    return `https://spoonacular.com/recipeImages/${recipe.id}-636x393.${recipe.imageType}`;
  };
  return (
    <div>
      {/* This Link allows a user to click on the image of the recipe and navigates them to the new page */}
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
