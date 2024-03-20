import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faSyncAlt } from "@fortawesome/free-solid-svg-icons";

import RecipeInstructions from "./RecipeInstructions";
import BackButton from "./BackButton";
import KEY from './apiConfig'; 
import { RecipeArrayProps, SpoonacularResponse } from "./Types/GlobalTypes";







const RecipeList = () => {
  const [data, setData] = useState<SpoonacularResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=${KEY}`
      );
      console.log(response);
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
  };

  return (
    <div>
      <button
        className="refresh-btn bottom-right"
        onClick={handleRefresh}
        disabled={loading}
      >
        <FontAwesomeIcon
          icon={loading ? faSpinner : faSyncAlt}
          spin={loading}
        />
      </button>
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



const RecipeArray = ({ data }: RecipeArrayProps) => {
  return (
    <div key={data.id} className="container">
      <h3 className="title">{data.title}</h3>
      <div className="content">
        <img src={data.image} className="image" />
        <div className="instructions">
          <h2>Instructions</h2>
          <p>
            {data.analyzedInstructions[0].steps.map((step, index) => (
              <li key={index}>{step.step}</li>
            ))}
          </p>
        </div>
      </div>
      <h4 className="title">Summary</h4>
      <div className="summary">
        <RecipeInstructions instructions={data.summary} />
      </div>
    </div>
  );
};

export default RecipeList;
