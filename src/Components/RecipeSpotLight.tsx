import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "./BackButton";
import RecipeInstructions from "./RecipeInstructions";
import { MatchParams, RecipeDetails, SimRecipes } from "./Types/GlobalTypes";
import SimRecipesContainer from "./SimRecipesContainer";
import KEY, { fetchInfoAndSimilarData } from "./apiConfig";

const RecipeSpotLight = () => {
  const { id } = useParams<MatchParams>();
  const [idData, setIdData] = useState<RecipeDetails | null>(null);
  const [idLoading, setIdLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [simData, setSimData] = useState<SimRecipes[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIdLoading(true);
      try {
        if (id) {
          const { idData, simData } = await fetchInfoAndSimilarData(id);
          setIdData(idData);
          setSimData(simData);
        }
        console.log("SIM RESPONSE DONE!");
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setIdLoading(false);
      }
    };

    fetchData();
  }, [id]);

  console.log(idData);

  return (
    <div>
      {idLoading ? (
        <div className="spinner-container">
          <FontAwesomeIcon icon={faSpinner} spin size="3x" />
          <p>Loading...</p>
        </div>
      ) : (
        <div key={idData?.id} className="container">
          <BackButton />
          <h3 className="title">{idData?.title}</h3>
          <div className="content">
            <img src={idData?.image} className="image" />

            <div className="instructions">
              <h2>Instructions</h2>
              <p>
                {idData?.analyzedInstructions?.[0]?.steps.map(
                  (step: { step: string }, index: number) => (
                    <li key={index}>{step.step}</li>
                  )
                )}
              </p>
            </div>
          </div>
          <h4 className="title">Summary</h4>
          <div className="summary">
            <RecipeInstructions
              instructions={idData?.summary ?? "No Summary Available"}
            />
          </div>
          <div className="sim-recipes-container">
            {simData &&
              simData.map((sim) => (
                <SimRecipesContainer simData={sim} key={sim.id} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeSpotLight;
