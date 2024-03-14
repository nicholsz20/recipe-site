import { faHouse, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import logo from "./Assets/logo.png"

type ShowNav = {
    showNav: boolean
}

const Navbar = ({showNav}: ShowNav) => {
  return (
    <div className={showNav ? 'sidenav active' : 'sidenav'}>
        <img src={logo} alt="logo" className="logo"/>
      <ul>
        <li>
          <Link to="/" className="nav-link">
          <FontAwesomeIcon icon={faHouse} className="nav-icons"/>
           Home</Link>
        </li>
        <br />
        <li>
          <Link to="/recipe_list" className="nav-link">
          <FontAwesomeIcon icon={faQuestion} className="nav-icons"/>
          Mystery Meal</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
