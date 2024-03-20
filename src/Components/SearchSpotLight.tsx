import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams} from "react-router-dom"
import BackButton from "./BackButton";
import RecipeInstructions from "./RecipeInstructions";
import { Recipe, SearchResponse } from "./SearchPage";
import SimRecipesContainer from "./SimRecipesContainer";
import KEY from './apiConfig'; 

interface MatchParams {
    [key: string]: string;
  }

  export interface RecipeDetails {
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

  export interface SimRecipes {
    id: string,
    title: string,
    imageType: string,
  }



const SearchSpotLight = () => {
    const id = useParams<{id: string}>();
    const numberId = id.id
    console.log(id)
    

    const [simData, setSimData] = useState<SimRecipes[] | null>(null);
    const [idData, setIdData] = useState<RecipeDetails | null>(null);
    const [idLoading, setIdLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
          setIdLoading(true);
          try {
            if (id){
              const response = await axios.get(`https://api.spoonacular.com/recipes/${numberId}/information?apiKey=${KEY}`);
              setIdData(response.data);
              console.log(response.data)
              const simResponse = await axios.get(`https://api.spoonacular.com/recipes/${numberId}/similar?apiKey=${KEY}`);
              setSimData(simResponse.data);
              
              console.log("SIM RESPONSE DONE!")
              
            }
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
      console.log("Similar Recipes" ,simData)

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
          
          {(idData?.analyzedInstructions) && idData.analyzedInstructions.length > 0 && (
  <div className="instructions">
    <h2>Instructions</h2>
    <ul>
      {idData.analyzedInstructions[0].steps.map((step: { step: string }, index: number) => (
        <li key={index}>{step.step}</li>
      ))}
    </ul>
  </div>
)}


          
        </div>
        <h4 className="title">Summary</h4>
                    <div className="summary">
                        <RecipeInstructions instructions={idData?.summary ?? "No Summary Available"} />
                    </div>
                    <div className="sim-recipes-container">
                        {simData && simData.map((sim) => (
                            <SimRecipesContainer simData={sim} key={sim.id}/>
                        ))}
                    </div>
      </div>
      )}
      </div>
    )
}


export interface SimRecipe {
    id: string;
    title: string;
    imageType: string;
}




export default SearchSpotLight;