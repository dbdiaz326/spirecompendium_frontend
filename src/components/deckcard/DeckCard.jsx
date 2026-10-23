import "./DeckCard.css";

const DeckCard = (props) => {
    return (
        <img
            className="deck-card"
            src={props.src}
            alt={props.title}
        />
    );
};

export default DeckCard;