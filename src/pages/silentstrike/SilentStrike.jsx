import "./SilentStrike.css";
import {NavLink} from "react-router-dom";
import strike from "../silent/images/silent-strike-image.png";

const SilentStrike = () => {
    return (
        <div id="silent-strike" className="page">
            <section className="detail-screen-section">
                <p className="detail-screen-subheading">
                    Card Detail / Silent
                </p>
                <section className="detail-screen-info-section">
                    <section className="detail-screen-card-image-section">
                        <img
                            className="detail-screen-card-image"
                            src={strike}
                            alt="Silent Strike"
                        />
                    </section>
                    <section className="detail-screen-text-section">
                        <h1 className="detail-screen-title">Strike</h1>
                        <p className="detail-screen-type">Starting Attack</p>

                        <h2 className="detail-screen-heading">Effect</h2>
                        <p className="detail-screen-effect">
                            Deal 6 damage.
                        </p>

                        <h2 className="detail-screen-heading">
                            Why It Matters
                        </h2>
                        <p className="detail-screen-description">
                            Your basic hit. Nothing fancy, but you will play
                            it a lot.
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

export default SilentStrike;