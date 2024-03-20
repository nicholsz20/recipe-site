import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import BackButton from "./BackButton";
import Pagination from "./Pageination";
import SearchBar from "./SearchBar";
import "./SearchPage.css";
import KEY, { fetchSearchData } from "./apiConfig";
import { SearchRecipesProps, SearchResponse } from "./Types/GlobalTypes";
import SearchDisplay from "./SearchDisplay";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q") || "";
  const [searchData, setSearchData] = useState<SearchResponse | null>(null);
  const [searchLoading, setSearchLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(9);

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = searchData?.results?.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );

  useEffect(() => {
    const fetchData = async () => {
      setSearchLoading(true);
      try {
        const searchData = await fetchSearchData(searchQuery);
        setSearchData(searchData);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setSearchLoading(false);
      }
    };
    if (searchQuery) {
      fetchData();
    }
  }, [searchQuery]);

  console.log(searchData);

  return (
    <div>
      <SearchBar className="SearchPage-search" />

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
              <SearchDisplay
                key={recipe.id}
                searchData={recipe}
                searchQuery={searchQuery}
              />
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
        <div>No recipes found.Please try a different search.</div>
      )}
    </div>
  );
};

export default SearchPage;
