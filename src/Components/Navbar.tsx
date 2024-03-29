//Purpose of this file is to display the navbar with links to multiple pages

import { faHouse, faList, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Navbar.css";

import logo from "./Assets/logo.png";
import { ShowNavNHandle } from "./Types/GlobalTypes";

const Navbar = ({ showNav, handleShowNav }: ShowNavNHandle) => {
  //showNav is a true false statement that if true will show the nav.
  //Its also how we hide the search bar when teh nav is true
  return (
    <div className={showNav ? "sidenav active" : "sidenav"}>
      <img src={logo} alt="logo" className="logo" />
      <ul>
        <li>
          <Link to="/" className="nav-link" onClick={handleShowNav}>
            <FontAwesomeIcon icon={faHouse} className="nav-icons" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/mystery" className="nav-link" onClick={handleShowNav}>
            <FontAwesomeIcon icon={faQuestion} className="nav-icons" />
            Mystery Meal
          </Link>
        </li>
        <li>
          <Link to="/categories" className="nav-link" onClick={handleShowNav}>
            <FontAwesomeIcon icon={faList} className="nav-icons" />
            Categories
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
