import "./HeroCard.css";
import {NavLink} from "react-router-dom";

const HeroCard = (props) => {
    return (
        <article className="hero-card">
            <div className="hero-card-color" id={props.color}>
                <NavLink to={props.link}>
                    <img className="hero-card-image" src={props.src} alt={props.title} />
                </NavLink>
            </div>
            <h3 className="hero-card-title">{props.title}</h3>
            <p className="hero-card-text">{props.description}</p>
            <p className="hero-card-emoji">{props.emoji}</p>
            <NavLink className="hero-card-link" to={props.link}>
                View Character →
            </NavLink>
        </article>
    );
};

export default HeroCard;