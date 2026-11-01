import "./Navigation.css";
import {useState} from "react";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleNav = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="main-nav">
            <button
                type="button"
                className="toggle-nav"
                onClick={toggleNav}
            >
                {menuOpen?(<span>&#8963;</span>):(<span>&#8964;</span>)}
            </button>
            <ul className={menuOpen?"":"hide-small"}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/ironclad">Ironclad</NavLink></li>
                <li><NavLink to="/silent">Silent</NavLink></li>
                <li><NavLink to="/defect">Defect</NavLink></li>
                <li><NavLink to="/watcher">Watcher</NavLink></li>
                <li><NavLink to="/contact">Contact Me</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navigation;