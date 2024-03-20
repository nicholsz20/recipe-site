import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Nav } from "./Types/GlobalTypes";

const Header = ({ handleShowNav }: Nav) => {
  return (
    <header>
      <FontAwesomeIcon
        icon={faBars}
        style={{ color: "#fcfcfd" }}
        onClick={handleShowNav}
      />
    </header>
  );
};

export default Header;
