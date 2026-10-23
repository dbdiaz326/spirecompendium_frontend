import "./Defect.css";
import {NavLink} from "react-router-dom";
import Relic from "../../components/relic/Relic";
import DeckCard from "../../components/deckcard/DeckCard";

import crackedCore from "./images/cracked-core-image.png";
import dataDisk from "./images/data-disk-image.png";
import goldPlatedCables from "./images/gold-plated-cables-image.png";
import symbioticVirus from "./images/symbiotic-virus-image.png";
import emotionChip from "./images/emotion-chip-image.png";
import frozenCore from "./images/frozen-core-image.png";
import inserter from "./images/inserter-image.png";
import nuclearBattery from "./images/nuclear-battery-image.png";
import runicCapacitor from "./images/runic-capacitor-image.png";

import strike from "./images/defect-strike-image.png";
import defend from "./images/defect-defend-image.png";
import zap from "./images/zap-image.png";
import dualcast from "./images/dualcast-image.png";

const Defect = () => {
    return (
        <div id="defect" className="page">
            <section id="defect-hero">
                <h1 className="character-screen-hero-title">
                    The<br />Defect
                </h1>
                <p className="character-screen-hero-description">
                    A mysterious automaton that channels Orbs to unleash
                    lightning, frost, and powerful elemental combinations.
                </p>
                <p className="character-screen-starting-health">
                    Starting HP: 75
                </p>
                <p className="character-screen-starting-relic">
                    Starting Relic: Cracked Core
                </p>
            </section>

            <section id="defect-relic-section">
                <h1 className="character-screen-relic-heading">
                    Defect Relics
                </h1>
                <p className="character-screen-relic-subheading">
                    Defect Collection
                </p>
                <section className="character-screen-relic-card-section">
                    <NavLink
                        className="character-screen-relic-card-link"
                        to="/cracked-core"
                    >
                        <Relic
                            name="Cracked Core"
                            description="At the start of combat, Channel 1 Lightning."
                            src={crackedCore}
                        />
                    </NavLink>
                    <Relic
                        name="Data Disk"
                        description="Start each combat with 1 Focus."
                        src={dataDisk}
                    />
                    <Relic
                        name="Gold-Plated Cables"
                        description="Your rightmost Orb triggers its passive one additional time."
                        src={goldPlatedCables}
                    />
                    <Relic
                        name="Symbiotic Virus"
                        description="At the start of combat, Channel 1 Dark."
                        src={symbioticVirus}
                    />
                    <Relic
                        name="Emotion Chip"
                        description="Whenever you lose HP, Channel 1 Lightning."
                        src={emotionChip}
                    />
                    <Relic
                        name="Frozen Core"
                        description="Replaces Cracked Core. Start combat with 1 Frost."
                        src={frozenCore}
                    />
                    <Relic
                        name="Inserter"
                        description="Every 2 turns, gain 1 Orb slot."
                        src={inserter}
                    />
                    <Relic
                        name="Nuclear Battery"
                        description="At the start of combat, Channel 1 Plasma."
                        src={nuclearBattery}
                    />
                    <Relic
                        name="Runic Capacitor"
                        description="Start each combat with 3 additional Orb slots."
                        src={runicCapacitor}
                    />
                </section>
            </section>

            <section id="defect-deck-section">
                <h1 className="character-screen-deck-heading">
                    Starting Deck
                </h1>
                <p className="character-screen-deck-description">
                    The Defect begins with 4 Strikes, 4 Defends, Zap,
                    and Dualcast.
                </p>
                <section className="character-screen-deck-card-section">
                    <NavLink
                        className="character-screen-deck-card-link"
                        to="/defect-strike"
                    >
                        <DeckCard title="Defect Strike" src={strike} />
                    </NavLink>
                    <DeckCard title="Defect Strike" src={strike} />
                    <DeckCard title="Defect Strike" src={strike} />
                    <DeckCard title="Defect Strike" src={strike} />
                    <DeckCard title="Defect Defend" src={defend} />
                    <DeckCard title="Defect Defend" src={defend} />
                    <DeckCard title="Defect Defend" src={defend} />
                    <DeckCard title="Defect Defend" src={defend} />
                    <DeckCard title="Zap" src={zap} />
                    <DeckCard title="Dualcast" src={dualcast} />
                </section>
            </section>
        </div>
    );
};

export default Defect;