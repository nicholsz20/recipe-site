import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import RecipeInstructions from "./RecipeInstructions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import './SearchResults.css';

interface Recipe {
  id: string;
  title: string;
  image: string;
  analyzedInstructions: [
    {
      steps: [
        {
          step: string;
        }
      ];
    }
  ];
  summary: string;
}

const KEY = "24ba6bf883a944a09e1f169a549f2c10";

const SearchResults = () => {
  const { searchQuery } = useParams();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [newSearchInput, setNewSearchInput] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Recipes";
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&apiKey=${KEY}&addRecipeInformation=true`);
        setRecipes(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]);

  const handleNewSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/search/${newSearchInput}`);
  };

  return (
    <div className="results-container">
      {/* New Search Bar */}
      <form onSubmit={handleNewSearch}>
        <input
          type="text"
          value={newSearchInput}
          onChange={(e) => setNewSearchInput(e.target.value)}
          placeholder="Search for another recipe..."
        />
        <button type="submit">Search</button>
      </form>

      {loading ? (
        <div className="spinner-container">
          <FontAwesomeIcon icon={faSpinner} spin size="3x" />
          <p>Loading...</p>
        </div>
      ) : recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-container">
            <h3 className="title">{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} className="recipe-image" />
            <div className="recipe-instructions">
              <h4>Instructions</h4>
              {recipe.analyzedInstructions[0]?.steps.map((step, index) => (
                <p key={index}>{step.step}</p>
              ))}
            </div>
            <div className="recipe-summary">
              <h4>Summary</h4>
              <RecipeInstructions instructions={recipe.summary} />
            </div>
          </div>
        ))
      ) : (
        <div className="no-recipes-message">
          <p>No recipes found for your search. Please try a different search.</p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;

// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import RecipeInstructions from "./RecipeInstructions";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSpinner } from "@fortawesome/free-solid-svg-icons";
// import './SearchResults.css';

// interface Recipe {
//   id: string;
//   title: string;
//   image: string;
//   analyzedInstructions: [
//     {
//       steps: [
//         {
//           step: string;
//         }
//       ];
//     }
//   ];
//   summary: string;
// }

// const KEY = "24ba6bf883a944a09e1f169a549f2c10";

// const SearchResults = () => {
//   const { searchQuery } = useParams();
//   const [recipes, setRecipes] = useState<Recipe[]>([]);
//   const [newSearchInput, setNewSearchInput] = useState('');
//   const [loading, setLoading] = useState<boolean>(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     document.title = "Recipes";
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&apiKey=${KEY}&addRecipeInformation=true`);
//         setRecipes(response.data.results);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [searchQuery]);

//   const handleNewSearch = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     navigate(`/search/${newSearchInput}`);
//   };

//   return (
//     <div className="results-container">
//       {/* New Search Bar */}
//       <form onSubmit={handleNewSearch}>
//         <input
//           type="text"
//           value={newSearchInput}
//           onChange={(e) => setNewSearchInput(e.target.value)}
//           placeholder="Search for another recipe..."
//         />
//         <button type="submit">Search</button>
//       </form>

//       {loading ? (
//         <div className="spinner-container">
//           <FontAwesomeIcon icon={faSpinner} spin size="3x" />
//           <p>Loading...</p>
//         </div>
//       ) : (
//         recipes.map((recipe) => (
//           <div key={recipe.id} className="recipe-container">
//             <h3 className="title">{recipe.title}</h3>
//             <img src={recipe.image} alt={recipe.title} className="recipe-image" />
//             <div className="recipe-instructions">
//               <h4>Instructions</h4>
//               {recipe.analyzedInstructions[0]?.steps.map((step, index) => (
//                 <p key={index}>{step.step}</p>
//               ))}
//             </div>
//             <div className="recipe-summary">
//               <h4>Summary</h4>
//               <RecipeInstructions instructions={recipe.summary} />
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default SearchResults;


