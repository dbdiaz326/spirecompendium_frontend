import "./Header.css";
import Navigation from "../navigation/Navigation";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="main-header">
            <NavLink className="site-logo" to="/">
                <h1>The Spire Character<br />Compendium</h1>
            </NavLink>
            <Navigation />
        </header>
    );
};

export default Header;