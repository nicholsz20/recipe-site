const mealType = [
    { cat: "main course", img: "" },
    { cat: "side dish", img: "" },
    { cat: "dessert", img: "" },
    { cat: "appetizer", img: "" },
    { cat: "salad", img: "" },
    { cat: "bread", img: "" },
    { cat: "breakfest", img: "" },
    { cat: "soup", img: "" },
    { cat: "beverage", img: "" },
    { cat: "sauce", img: "" },
    { cat: "marinade", img: "" },
    { cat: "fingerfood", img: "" },
    { cat: "snack", img: "" },
    { cat: "drink", img: "" },
  ];
  
  const Category = () => {
    return <div>{mealType.map((meal, index) => <CatType key={index} meal={meal} />)}</div>;
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
      <div>
        <h5>{meal.cat}</h5>
      </div>
    );
  };
  
  export default Category;
  