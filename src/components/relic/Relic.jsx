import "./Relic.css";

const Relic = (props) => {
    return (
        <article className="character-screen-relic-card">
            <img
                className="character-screen-relic-image"
                src={props.src}
                alt={props.name}
            />
            <h3 className="character-screen-relic-name">{props.name}</h3>
            <p className="character-screen-relic-description">
                {props.description}
            </p>
        </article>
    );
};

export default Relic;