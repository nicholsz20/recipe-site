import { faHouse, faList, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Navbar.css";

import logo from "./Assets/logo.png"

type ShowNav = {
    showNav: boolean,
    handleShowNav: () => void
}

const Navbar = ({showNav, handleShowNav}: ShowNav) => {
  return (
    <div className={showNav ? 'sidenav active' : 'sidenav'}>
        <img src={logo} alt="logo" className="logo"/>
      <ul>
        <li>
          <Link to="/" className="nav-link" onClick={handleShowNav}>
          <FontAwesomeIcon icon={faHouse} className="nav-icons"/>
           Home</Link>
        </li> 
        <li>
          <Link to="/mystery" className="nav-link" onClick={handleShowNav}>
          <FontAwesomeIcon icon={faQuestion} className="nav-icons"/>
          Mystery Meal</Link>
        </li>
        <li>
          <Link to="/categories" className="nav-link" onClick={handleShowNav}>
          <FontAwesomeIcon icon={faList} className="nav-icons"/>
          Categories</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
