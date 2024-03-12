import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div>
            <Link to="/">
                Home
            </Link> 
            <br />
            <Link to="/recipe_list">
                Mystery Meal
            </Link>
        </div>
    )
}


export default Navbar;