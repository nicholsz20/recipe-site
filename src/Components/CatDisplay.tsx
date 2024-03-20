import { Link, useParams } from "react-router-dom";
import { CatRecipesArray, MatchParams } from "./Types/GlobalTypes";

const CatDisplay = ({ catData }: CatRecipesArray) => {
    const { mealType } = useParams<MatchParams>();
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