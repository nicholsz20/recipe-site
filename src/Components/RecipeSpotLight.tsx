import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import BackButton from "./BackButton";
import RecipeInstructions from "./RecipeInstructions";

interface MatchParams {
    [key: string]: string;
  }

  interface RecipeDetails {
    id: string;
  title: string;
  analyzedInstructions?: {
    steps: Array<{
      step: string;
    }>;
  }[];
  dishTypes: string[];
  diaryFree: boolean;
  diets: string[];
  summary?: string;
  image: string;
  cuisines: string[];
  }

  //const KEY = "24ba6bf883a944a09e1f169a549f2c10";
//const KEY = "cb61fb7dddc34daba2d7f61b391e90c1";
//const KEY = "e3de5d36255e46babdbd21cbbbf5ec38";
  const KEY = "fa0f376a27884351b9f852d1ae5e20f8"

const RecipeSpotLight = () => {
    const { id } = useParams<MatchParams>()
    const [idData, setIdData] = useState<RecipeDetails | null>(null);
    const [idLoading, setIdLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
          setIdLoading(true);
          try {
            const response = await axios.get(
                `https://api.spoonacular.com/recipes/${id}/information?apiKey=${KEY}`
                );
            console.log(response);
            setIdData(response.data);
          } catch (error) {
            console.error("Error fetching data:", error);
            setError("Error fetching data");
          } finally {
            setIdLoading(false);
          }
        };
    
        fetchData();
      }, [id]);

      console.log(idData)




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
            {idData?.analyzedInstructions?.[0]?.steps.map((step: { step: string }, index: number) => (
  <li key={index}>{step.step}</li>
))}
            </p>
          </div>

          
        </div>
        <h4 className="title">Summary</h4>
        <div className="summary">
          <RecipeInstructions instructions={idData?.summary ?? "No Summary Available"} />
        </div>
      </div>
      )}
      </div>
    )
}


export default RecipeSpotLight;