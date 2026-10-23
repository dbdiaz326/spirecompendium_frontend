import "./RingOfTheSnake.css";
import {NavLink} from "react-router-dom";
import ringOfTheSnake from "../silent/images/ring-of-the-snake-image.png";

const RingOfTheSnake = () => {
    return (
        <div id="ring-of-the-snake" className="page">
            <section className="detail-screen-section">
                <p className="detail-screen-subheading">
                    Relic Detail / Silent
                </p>
                <section className="detail-screen-info-section">
                    <section className="detail-screen-image-section">
                        <img
                            className="detail-screen-image"
                            src={ringOfTheSnake}
                            alt="Ring of the Snake"
                        />
                    </section>
                    <section className="detail-screen-text-section">
                        <h1 className="detail-screen-title">
                            Ring of the Snake
                        </h1>
                        <p className="detail-screen-type">Starting Relic</p>

                        <h2 className="detail-screen-heading">Effect</h2>
                        <p className="detail-screen-effect">
                            At the start of each combat, draw 2 additional cards.
                        </p>

                        <h2 className="detail-screen-heading">
                            Why It Matters
                        </h2>
                        <p className="detail-screen-description">
                            More cards on turn one means more options right away.
                        </p>

                        <NavLink
                            className="detail-screen-back-link"
                            to="/silent"
                        >
                            Back to Silent
                        </NavLink>
                    </section>
                </section>
            </section>
        </div>
    );
};

export default RingOfTheSnake;