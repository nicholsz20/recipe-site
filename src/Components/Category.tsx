//Purpose of this file is to display the categories that the api uses.

import ViewAll from "./Assets/viewall.webp";
import BackButton from "./BackButton";
import SearchBar from "./SearchBar";
import "./Category.css";
import { CatType } from "./CatType";

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
    cat: "View All",
    img: `${ViewAll}`,
  },
];

//Meal Type is our static array based off spoonacular meal types that we map over to create the category page

const Category = () => {
  return (
    <>
      <SearchBar className="Category-search" />
      <BackButton />
      <h1 className="cat">Categories</h1>
      <div className="cat-container">
        {mealType.map((meal, index) => (
          <CatType key={index} meal={meal} />
        ))}
      </div>
    </>
  );
};

export default Category;
