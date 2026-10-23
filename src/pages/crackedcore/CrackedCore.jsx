import "./CrackedCore.css";
import {NavLink} from "react-router-dom";
import crackedCore from "../defect/images/cracked-core-image.png";

const CrackedCore = () => {
    return (
        <div id="cracked-core" className="page">
            <section className="detail-screen-section">
                <p className="detail-screen-subheading">
                    Relic Detail / Defect
                </p>
                <section className="detail-screen-info-section">
                    <section className="detail-screen-image-section">
                        <img
                            className="detail-screen-image"
                            src={crackedCore}
                            alt="Cracked Core"
                        />
                    </section>
                    <section className="detail-screen-text-section">
                        <h1 className="detail-screen-title">Cracked Core</h1>
                        <p className="detail-screen-type">Starting Relic</p>

                        <h2 className="detail-screen-heading">Effect</h2>
                        <p className="detail-screen-effect">
                            At the start of combat, Channel 1 Lightning.
                        </p>

                        <h2 className="detail-screen-heading">
                            Why It Matters
                        </h2>
                        <p className="detail-screen-description">
                            Starting every combat with a Lightning Orb gives
                            you extra damage right away.
                        </p>

                        <NavLink
                            className="detail-screen-back-link"
                            to="/defect"
                        >
                            Back to Defect
                        </NavLink>
                    </section>
                </section>
            </section>
        </div>
    );
};

export default CrackedCore;