import { Link } from "react-router-dom";
import { MealTypes } from "./Types/GlobalTypes";

export const CatType = ({ meal }: MealTypes) => {
  return (
    <div className="cat">
      <Link to={meal.cat}>
        <img src={meal.img} alt={meal.cat} className="cat-img" />
        <h3 className="cat-title">{meal.cat}</h3>
      </Link>
    </div>
  );
};
