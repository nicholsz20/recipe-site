//Purpose of this file is to hold the category page and link the user to the recipe page

import { Link, useParams } from "react-router-dom";
import { CatRecipesArray, MatchParams } from "./Types/GlobalTypes";

const CatDisplay = ({ catData }: CatRecipesArray) => {
    const { mealType } = useParams<MatchParams>(); //checks the params from the app file so when its "/categories/:mealType" anything after categories  is mealType

    //Link is how we link the category page to the recipe page
  return (
    <div className="cat">
        <Link to={`/categories/${mealType}/${catData.id}`} onClick={() => console.log(catData.id)}>
      <img src={catData.image} alt={catData.title} className="cat-img" />
      <h3 className="cat-title">{catData.title}</h3>
      </Link>
    </div>
  );
};

export default CatDisplay;