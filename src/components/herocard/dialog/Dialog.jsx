import "./Dialog.css";
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <div id="hero-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span
                        className="dialog-close w3-button w3-display-topright"
                        onClick={props.close_dialog}
                    >
                        &times;
                    </span>
                </div>

                <h2>{props.title}</h2>
                <img src={props.src} alt={props.title} />
                <p>{props.description}</p>
                <p className="hero-dialog-emoji">{props.emoji}</p>

                {props.link && (
                    <NavLink
                        className="hero-card-link"
                        to={props.link}
                        onClick={props.close_dialog}
                    >
                        View Deck and Relics →
                    </NavLink>
                )}
            </div>
        </div>
    );
};

export default Dialog;