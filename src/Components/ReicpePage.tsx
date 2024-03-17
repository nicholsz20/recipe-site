import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BackButton from "./BackButton";

interface MatchParams {
  [key: string]: string;
}

interface Recipe {
  id: string;
  title: string;
  image: string;
}
interface ApiResponse {
    results: Recipe[];
    offset: number;
    number: number;
    totalResults: number;
  }

//const KEY = "24ba6bf883a944a09e1f169a549f2c10";
//const KEY = "cb61fb7dddc34daba2d7f61b391e90c1";
const KEY = "e3de5d36255e46babdbd21cbbbf5ec38";

const RecipePage = () => {
  const { mealType } = useParams<MatchParams>();
  const [catData, setCatData] = useState<Recipe[] | null>(null);
  const [catLoading, setCatLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setCatLoading(true);
      try {
        const response = await axios.get<ApiResponse>(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${KEY}&type=${mealType}&number=10`
        );
        console.log(response);
        setCatData(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data");
      } finally {
        setCatLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log("CAtDAta", catData);

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
            {catData.map((c) => (
              <CatDisplay key={c.id} catData={c} />
            ))}
          </div>
        </>
      ) : (
        <div>No recipes found</div>
      )}
    </div>
  );
};

interface CatRecipesArray {
  catData: Recipe;
}

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
export default RecipePage;