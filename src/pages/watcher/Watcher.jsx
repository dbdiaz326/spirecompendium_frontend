import "./Watcher.css";
import {NavLink} from "react-router-dom";
import Relic from "../../components/relic/Relic";
import DeckCard from "../../components/deckcard/DeckCard";

import pureWater from "./images/pure-water-image.png";
import damaru from "./images/damaru-image.png";
import duality from "./images/duality-image.png";
import teardropLocket from "./images/teardrop-locket-image.png";
import cloakClasp from "./images/cloak-clasp-image.png";
import goldenEye from "./images/golden-eye-image.png";
import holyWater from "./images/holy-water-image.png";
import violetLotus from "./images/violet-lotus-image.png";
import melange from "./images/melange-image.png";

import strike from "./images/watcher-strike-image.png";
import defend from "./images/watcher-defend-image.png";
import eruption from "./images/eruption-image.png";
import vigilance from "./images/vigilance-image.png";

const Watcher = () => {
    return (
        <div id="watcher" className="page">
            <section id="watcher-hero">
                <h1 className="character-screen-hero-title">
                    The<br />Watcher
                </h1>
                <p className="character-screen-hero-description">
                    A disciplined monk who shifts between calm and wrath
                    to turn inner focus into explosive power.
                </p>
                <p className="character-screen-starting-health">
                    Starting HP: 72
                </p>
                <p className="character-screen-starting-relic">
                    Starting Relic: Pure Water
                </p>
            </section>

            <section id="watcher-relic-section">
                <h1 className="character-screen-relic-heading">
                    Watcher Relics
                </h1>
                <p className="character-screen-relic-subheading">
                    Watcher Collection
                </p>
                <section className="character-screen-relic-card-section">
                    <NavLink
                        className="character-screen-relic-card-link"
                        to="/pure-water"
                    >
                        <Relic
                            name="Pure Water"
                            description="At the start of each combat, add a Miracle into your hand."
                            src={pureWater}
                        />
                    </NavLink>
                    <Relic
                        name="Damaru"
                        description="Start each combat with 1 Mantra."
                        src={damaru}
                    />
                    <Relic
                        name="Duality"
                        description="Attacks give Dexterity; Skills give Strength."
                        src={duality}
                    />
                    <Relic
                        name="Teardrop Locket"
                        description="Start each combat in Calm."
                        src={teardropLocket}
                    />
                    <Relic
                        name="Cloak Clasp"
                        description="When you exit Calm, gain 6 Block."
                        src={cloakClasp}
                    />
                    <Relic
                        name="Golden Eye"
                        description="Whenever you Scry, Scry 2 additional cards."
                        src={goldenEye}
                    />
                    <Relic
                        name="Holy Water"
                        description="Start each combat with 3 Miracles."
                        src={holyWater}
                    />
                    <Relic
                        name="Violet Lotus"
                        description="Exit Calm to gain 1 additional Energy."
                        src={violetLotus}
                    />
                    <Relic
                        name="Melange"
                        description="When you shuffle, Scry 3."
                        src={melange}
                    />
                </section>
            </section>

            <section id="watcher-deck-section">
                <h1 className="character-screen-deck-heading">
                    Starting Deck
                </h1>
                <p className="character-screen-deck-description">
                    The Watcher begins with 4 Strikes, 4 Defends,
                    Eruption, and Vigilance.
                </p>
                <section className="character-screen-deck-card-section">
                    <NavLink
                        className="character-screen-deck-card-link"
                        to="/watcher-strike"
                    >
                        <DeckCard title="Watcher Strike" src={strike} />
                    </NavLink>
                    <DeckCard title="Watcher Strike" src={strike} />
                    <DeckCard title="Watcher Strike" src={strike} />
                    <DeckCard title="Watcher Strike" src={strike} />
                    <DeckCard title="Watcher Defend" src={defend} />
                    <DeckCard title="Watcher Defend" src={defend} />
                    <DeckCard title="Watcher Defend" src={defend} />
                    <DeckCard title="Watcher Defend" src={defend} />
                    <DeckCard title="Eruption" src={eruption} />
                    <DeckCard title="Vigilance" src={vigilance} />
                </section>
            </section>
        </div>
    );
};

export default Watcher;