// Purpose of this file is to display a hero image and the search bar
import "./Home.css";
import SearchBar from "./SearchBar";
import { ShowNav } from "./Types/GlobalTypes";

const Home = ({ showNav }: ShowNav) => {

  return (
    <div>
      <div className="hero">
        <SearchBar
          className={!showNav ? "hero-search" : "hero-search hidden"}
        />
      </div>
    </div>
  );
};

export default Home;
