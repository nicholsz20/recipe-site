import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import BackButton from './BackButton';
import Pagination from './Pageination';

//const KEY = "24ba6bf883a944a09e1f169a549f2c10";
//const KEY = "cb61fb7dddc34daba2d7f61b391e90c1";
//const KEY = "e3de5d36255e46babdbd21cbbbf5ec38";
//const KEY = "fa0f376a27884351b9f852d1ae5e20f8";
const KEY = "50980bc1ff884ed68509e87da2cf5db1";

interface SearchResponse {
  results: Recipe[];
  offset: number;
  number: number;
  totalResults: number;
}

interface Recipe {
  id: string;
  title: string;
  image: string;
  // Add other recipe properties here
}

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || '';
  const [searchData, setSearchData] = useState<SearchResponse | null>(null);
  const [searchLoading, setSearchLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(9);

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = searchData?.results?.slice(indexOfFirstRecipe, indexOfLastRecipe);

  useEffect(() => {
    const fetchData = async () => {
      setSearchLoading(true);
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&apiKey=${KEY}&number=99`
        );
        setSearchData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
      } finally {
        setSearchLoading(false);
      }
    };

    if (searchQuery) {
      fetchData();
    }
  }, [searchQuery]);

  console.log(searchData)

  return (
    <div>
      {searchLoading ? (
        <div className="spinner-container">
          <FontAwesomeIcon icon={faSpinner} spin size="3x" />
          <p>Loading...</p>
        </div>
      ) : error ? (
        <div>{error}</div>
      ) : searchData && searchData.results.length > 0 ? (
        <>
          <BackButton />
          <h1 className="cat">{searchQuery}</h1>
          <div className="cat-container">
            {currentRecipes?.map((recipe) => (
              <SearchDisplay key={recipe.id} searchData={recipe} searchQuery={searchQuery} />
            ))}
          </div>
          <Pagination
            totalRecipes={searchData.results.length || 0}
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

interface SearchRecipesProps {
  searchData: Recipe;
  searchQuery: string;
}

const SearchDisplay = ({ searchData, searchQuery }: SearchRecipesProps) => {
    console.log(searchData.id)
  return (
    <div className="cat">
      <Link to={`/search/${searchData.id}`}>
        <img src={searchData.image} alt={searchData.title} className="cat-img" />
      </Link>
      <h3 className="cat-title">{searchData.title}</h3>
    </div>
  );
};

export default SearchPage;