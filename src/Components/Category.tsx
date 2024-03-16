import { Link } from 'react-router-dom';
import ViewAll from './Assets/viewall.webp';

const mealType = [
  {
    cat: "main course",
    img: "https://spoonacular.com/recipeImages/637335-556x370.jpg",
  },
  {
    cat: "side dish",
    img: "https://spoonacular.com/recipeImages/635846-556x370.jpg",
  },
  {
    cat: "dessert",
    img: "https://spoonacular.com/recipeImages/579247-556x370.jpg",
  },
  {
    cat: "appetizer",
    img: "https://spoonacular.com/recipeImages/663338-556x370.jpg",
  },
  {
    cat: "salad",
    img: "https://spoonacular.com/recipeImages/796684-556x370.jpg",
  },
  {
    cat: "bread",
    img: "https://spoonacular.com/recipeImages/636133-312x231.jpg",
  },
  {
    cat: "breakfast",
    img: "https://spoonacular.com/recipeImages/665307-312x231.jpg",
  },
  {
    cat: "soup",
    img: "https://spoonacular.com/recipeImages/653687-556x370.jpg",
  },
  {
    cat: "beverage",
    img: "https://spoonacular.com/recipeImages/1096295-312x231.jpg",
  },
  {
    cat: "sauce",
    img: "https://spoonacular.com/recipeImages/633068-556x370.jpg",
  },
  {
    cat: "snack",
    img: "https://spoonacular.com/recipeImages/651437-556x370.jpg",
  },
  {
    cat: 'View All',
    img: `${ViewAll}`
  }
];

const Category = () => {
  return (
    <>
    <h1 className="cat">Categories</h1>
    <div className="cat-container">   
      {mealType.map((meal, index) => (
        <CatType key={index} meal={meal} />
      ))}
      
    </div>
    
    </>
  );
};

interface MealType {
  cat: string;
  img: string;
}

interface MealTypes {
  meal: MealType;
}

const CatType = ({ meal }: MealTypes) => {
  return (
    
      <div className="cat">
        <Link to={meal.cat}>
        <img src={meal.img} alt={meal.cat} className="cat-img" />
        <h3 className="cat-title">{meal.cat}</h3>
        </Link>
      </div>
    
  );
};

export default Category;
