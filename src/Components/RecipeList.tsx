import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import RecipeInstructions from "./RecipeInstructions";

export interface Recipe {
  id: number;
  title: string;
  instructions: string;
  summary: string;
  image: string;
  cuisines: string[];
}

export interface SpoonacularResponse {
  recipes: Recipe[];
}

const KEY = "24ba6bf883a944a09e1f169a549f2c10";

const RecipeList = () => {
  const [data, setData] = useState<SpoonacularResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

    const fetchData = async () => {
        setLoading(true)
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/random?apiKey=${KEY}`
        );
        setData(response.data);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleRefresh = () => {
        fetchData();
    }

  return (
    <div>
    <button onClick={handleRefresh} disabled={loading}>Refresh Meal</button>
      {loading ? (
        <div className="spinner-container">
          <FontAwesomeIcon icon={faSpinner} spin size="3x" />
          <p>Loading...</p>
        </div>
      ) : (
        
        data?.recipes.map((recipe) => (
          <RecipeArray key={recipe.id} data={recipe} />
        ))
        
        
      )}
      
    </div>
  );
};

interface RecipeArrayProps {
  data: Recipe;
}

const RecipeArray = ({ data }: RecipeArrayProps) => {
  return (
    <div key={data.id} className="text-center">
      <ul>
        <div>
          <span hidden>{data.id}</span>
          <h3>{data.title}</h3>
        </div>
        <div>
          <img src={data.image} />
        </div>
        <div>
          <RecipeInstructions instructions={data.instructions} />
        </div>
        <div>
          <RecipeInstructions instructions={data.summary} />
        </div>
      </ul>
    </div>
  );
};

export default RecipeList;
