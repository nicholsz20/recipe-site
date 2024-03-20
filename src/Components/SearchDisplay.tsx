import { Link } from "react-router-dom";
import { SearchRecipesProps } from "./Types/GlobalTypes";

const SearchDisplay = ({ searchData, searchQuery }: SearchRecipesProps) => {
  console.log(searchData.id);
  return (
    <div className="cat">
      <Link to={`/search/${searchData.id}`}>
        <img
          src={searchData.image}
          alt={searchData.title}
          className="cat-img"
        />
      </Link>
      <h3 className="cat-title">{searchData.title}</h3>
    </div>
  );
};

export default SearchDisplay;
