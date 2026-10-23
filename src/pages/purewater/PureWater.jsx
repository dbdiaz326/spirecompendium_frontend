import "./PureWater.css";
import {NavLink} from "react-router-dom";
import pureWater from "../watcher/images/pure-water-image.png";

const PureWater = () => {
    return (
        <div id="pure-water" className="page">
            <section className="detail-screen-section">
                <p className="detail-screen-subheading">
                    Relic Detail / Watcher
                </p>
                <section className="detail-screen-info-section">
                    <section className="detail-screen-image-section">
                        <img
                            className="detail-screen-image"
                            src={pureWater}
                            alt="Pure Water"
                        />
                    </section>
                    <section className="detail-screen-text-section">
                        <h1 className="detail-screen-title">Pure Water</h1>
                        <p className="detail-screen-type">Starting Relic</p>

                        <h2 className="detail-screen-heading">Effect</h2>
                        <p className="detail-screen-effect">
                            At the start of each combat, add a Miracle
                            into your hand.
                        </p>

                        <h2 className="detail-screen-heading">
                            Why It Matters
                        </h2>
                        <p className="detail-screen-description">
                            The extra Miracle gives you more energy when
                            you need it.
                        </p>

                        <NavLink
                            className="detail-screen-back-link"
                            to="/watcher"
                        >
                            Back to Watcher
                        </NavLink>
                    </section>
                </section>
            </section>
        </div>
    );
};

export default PureWater;