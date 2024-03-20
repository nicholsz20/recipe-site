import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BackButton from "./BackButton";
import Pagination from "./Pageination";
import KEY, { fetchMealTypeData } from "./apiConfig";
import {
  ApiResponse,
  CatRecipesArray,
  MatchParams,
  Recipe,
} from "./Types/GlobalTypes";
import CatDisplay from "./CatDisplay";

const RecipePage = () => {
  const { mealType } = useParams<MatchParams>();
  const [catData, setCatData] = useState<Recipe[] | null>(null);
  const [catLoading, setCatLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [mealTypeState, setMealTypeState] = useState(mealType);
  const [initialMealType] = useState(mealType); // Store the initial mealType
  // State variable to store the mealType

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
