//Purpose of this file is to display the food for a category
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "./BackButton";
import Pagination from "./Pageination";
import { fetchMealTypeData } from "./apiConfig";
import { MatchParams, Recipe } from "./Types/GlobalTypes";
import CatDisplay from "./CatDisplay";

const RecipePage = () => {
  const { mealType } = useParams<MatchParams>();
  const [catData, setCatData] = useState<Recipe[] | null>(null);
  const [catLoading, setCatLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [mealTypeState, setMealTypeState] = useState(mealType);
  const [initialMealType] = useState(mealType); // Store the initial mealType
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [recipesPerPage] = useState(9); // Number of recipes to show per page
  const indexOfLastRecipe = currentPage * recipesPerPage;
  // Calculate the index of the first recipe to show on the current page
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  // Get the recipes to show on the current page
  const currentRecipes = catData?.slice(indexOfFirstRecipe, indexOfLastRecipe);

  useEffect(() => {
    const fetchData = async () => {
      setCatLoading(true);
      try {
        const mealTypeData = await fetchMealTypeData(mealType);
        setCatData(mealTypeData.results);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setCatLoading(false);
      }
    };
    fetchData();
  }, [mealType]);
  //useeffect above calls the api when it gets mounted and whenever the mealType changes so whenever we pick a different category

  console.log("CatData", catData);

  return (
    <div>
      {catLoading ? (
        <div className="spinner-container">
          <FontAwesomeIcon icon={faSpinner} spin size="3x" />
          <p>Loading...</p>
        </div>
      ) : error ? (
        <div>{error}</div>
      ) : catData && catData.length > 0 ? (
        <>
          <BackButton />
          <h1 className="cat">{mealType}</h1>
          <div className="cat-container">
            {currentRecipes?.map((c) => (
              <CatDisplay key={c.id} catData={c} />
            ))}
          </div>
          <Pagination
            totalRecipes={catData?.length || 0}
            recipesPerPage={recipesPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      ) : (
        <div>No recipes found</div>
      )}
    </div>
  );
};

export default RecipePage;
