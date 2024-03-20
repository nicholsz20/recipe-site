import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faSyncAlt } from "@fortawesome/free-solid-svg-icons";

import RecipeInstructions from "./RecipeInstructions";
import BackButton from "./BackButton";
import KEY, { fetchMysteryData } from "./apiConfig";
import { RecipeArrayProps, SpoonacularResponse } from "./Types/GlobalTypes";
import { RecipeArray } from "./RecipeArray";

const RecipeList = () => {
  const [data, setData] = useState<SpoonacularResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetchMysteryData();
      console.log(response);
      setData(response);
    } catch (error) {
      throw error;
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

export default RecipeList;
