import "./StepCard.css";

const StepCard = (props) => {
    return (
        <article className="steps-card">
            <h2 className="steps-number">{props.number}</h2>
            <h3 className="steps-card-title">{props.title}</h3>
            <p className="steps-card-text">{props.description}</p>
        </article>
    );
};

export default StepCard;