import "./Ironclad.css";
import {NavLink} from "react-router-dom";
import Relic from "../../components/relic/Relic";
import DeckCard from "../../components/deckcard/DeckCard";

import burningBlood from "./images/burning-blood-image.png";
import redSkull from "./images/red-skull-image.png";
import paperPhrog from "./images/paper-phrog-image.png";
import selfFormingClay from "./images/self-forming-clay-image.png";
import championBelt from "./images/champion-belt-image.png";
import charonsAshes from "./images/charons-ashes-image.png";
import magicFlower from "./images/magic-flower-image.png";
import blackBlood from "./images/black-blood-image.png";
import markOfPain from "./images/mark-of-pain-image.png";
import runicCube from "./images/runic-cube-image.png";
import brimstone from "./images/brimstone-image.png";

import strike from "./images/ironclad-strike-image.png";
import defend from "./images/ironclad-defend-image.png";
import bash from "./images/bash-image.png";

const Ironclad = () => {
    return (
        <div id="ironclad" className="page">
            <section id="ironclad-hero">
                <h1 className="character-screen-hero-title">
                    The<br />Ironclad
                </h1>
                <p className="character-screen-hero-description">
                    A relentless warrior who turns strength, defense,
                    and self-healing into a path to the top of the Spire.
                </p>
                <p className="character-screen-starting-health">
                    Starting HP: 80
                </p>
                <p className="character-screen-starting-relic">
                    Starting Relic: Burning Blood
                </p>
            </section>
            <section id="ironclad-relic-section">
                <h1 className="character-screen-relic-heading">
                    Ironclad Relics
                </h1>
                <p className="character-screen-relic-subheading">
                    Ironclad Collection
                </p>
                <section className="character-screen-relic-card-section">
                    <NavLink
                        className="character-screen-relic-card-link"
                        to="/burning-blood"
                    >
                        <Relic
                            name="Burning Blood"
                            description="Heal 6 HP after combat."
                            src={burningBlood}
                        />
                    </NavLink>
                    <Relic
                        name="Red Skull"
                        description="While below 50% HP, gain 3 Strength."
                        src={redSkull}
                    />
                    <Relic
                        name="Paper Phrog"
                        description="Enemies with Vulnerable take 75% more damage."
                        src={paperPhrog}
                    />
                    <Relic
                        name="Self-Forming Clay"
                        description="When attacked, gain 3 Block next turn."
                        src={selfFormingClay}
                    />
                    <Relic
                        name="Champion Belt"
                        description="Applying Vulnerable also applies 1 Weak."
                        src={championBelt}
                    />
                    <Relic
                        name="Charon's Ashes"
                        description="Exhausting a card deals 3 damage to all enemies."
                        src={charonsAshes}
                    />
                    <Relic
                        name="Magic Flower"
                        description="Healing is 50% more effective."
                        src={magicFlower}
                    />
                    <Relic
                        name="Black Blood"
                        description="Replaces Burning Blood. Heal 12 HP after combat."
                        src={blackBlood}
                    />
                    <Relic
                        name="Mark of Pain"
                        description="Gain 1 Energy. Add 2 Wounds to your deck."
                        src={markOfPain}
                    />
                    <Relic
                        name="Runic Cube"
                        description="Whenever you lose HP, draw 1 card."
                        src={runicCube}
                    />
                    <Relic
                        name="Brimstone"
                        description="At the start of each turn, gain 2 Strength. All enemies gain 1 Strength."
                        src={brimstone}
                    />
                </section>
            </section>
            <section id="ironclad-deck-section">
                <h1 className="character-screen-deck-heading">
                    Starting Deck
                </h1>
                <p className="character-screen-deck-description">
                    The Ironclad begins with 5 Strikes, 4 Defends, and Bash.
                </p>
                <section className="character-screen-deck-card-section">
                    <NavLink
                        className="character-screen-deck-card-link"
                        to="/ironclad-strike"
                    >
                        <DeckCard title="Ironclad Strike" src={strike} />
                    </NavLink>
                    <DeckCard title="Ironclad Strike" src={strike} />
                    <DeckCard title="Ironclad Strike" src={strike} />
                    <DeckCard title="Ironclad Strike" src={strike} />
                    <DeckCard title="Ironclad Strike" src={strike} />
                    <DeckCard title="Ironclad Defend" src={defend} />
                    <DeckCard title="Ironclad Defend" src={defend} />
                    <DeckCard title="Ironclad Defend" src={defend} />
                    <DeckCard title="Ironclad Defend" src={defend} />
                    <DeckCard title="Bash" src={bash} />
                </section>
            </section>
        </div>
    );
};

export default Ironclad;