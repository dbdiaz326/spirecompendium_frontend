import "./Navigation.css";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="main-nav">
            <ul>
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