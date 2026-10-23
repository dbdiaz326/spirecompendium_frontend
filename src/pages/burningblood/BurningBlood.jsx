import "./BurningBlood.css";
import {NavLink} from "react-router-dom";
import burningBlood from "../ironclad/images/burning-blood-image.png";

const BurningBlood = () => {
    return (
        <div id="burning-blood" className="page">
            <section className="detail-screen-section">
                <p className="detail-screen-subheading">
                    Relic Detail / Ironclad
                </p>
                <section className="detail-screen-info-section">
                    <section className="detail-screen-image-section">
                        <img
                            className="detail-screen-image"
                            src={burningBlood}
                            alt="Burning Blood"
                        />
                    </section>
                    <section className="detail-screen-text-section">
                        <h1 className="detail-screen-title">Burning Blood</h1>
                        <p className="detail-screen-type">Starting Relic</p>

                        <h2 className="detail-screen-heading">Effect</h2>
                        <p className="detail-screen-effect">
                            At the end of combat, heal 6 HP.
                        </p>

                        <h2 className="detail-screen-heading">
                            Why It Matters
                        </h2>
                        <p className="detail-screen-description">
                            The free healing adds up more than you would think.
                        </p>

                        <NavLink
                            className="detail-screen-back-link"
                            to="/ironclad"
                        >
                            Back to Ironclad
                        </NavLink>
                    </section>
                </section>
            </section>
        </div>
    );
};

export default BurningBlood;