import "./Header.css";
import Navigation from "../navigation/Navigation";

const Header = () => {
    return (
        <header className="main-header">
            <a className="site-logo" href="#">
                <h1>The Spire Character<br />Compendium</h1>
            </a>
            <Navigation />
        </header>
    );
};
export default Header;