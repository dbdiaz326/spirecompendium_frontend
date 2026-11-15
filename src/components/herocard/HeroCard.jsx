import "./HeroCard.css";
import {useState} from "react";
import Dialog from "./dialog/Dialog";

const HeroCard = (props) => {
    const [showDialog, setShowDialog] = useState(false);

    const showDetails = () => {
        setShowDialog(true);
    };

    const hideDetails = () => {
        setShowDialog(false);
    };

    return (
        <>
            <article className="hero-card">
                <div className={`hero-card-color ${props.color}`}>
                    <img
                        className="hero-card-image"
                        src={props.src}
                        alt={props.title}
                        onClick={showDetails}
                    />
                </div>
                <h3 className="hero-card-title">{props.title}</h3>
                <p className="hero-card-text">{props.description}</p>
                <p className="hero-card-emoji">{props.emoji}</p>
                <button className="hero-card-link" onClick={showDetails}>
                    View Character →
                </button>
            </article>

            {showDialog && <Dialog
                title={props.title}
                description={props.description}
                emoji={props.emoji}
                link={props.link}
                src={props.src}
                close_dialog={hideDetails}
            />}
        </>
    );
};

export default HeroCard;