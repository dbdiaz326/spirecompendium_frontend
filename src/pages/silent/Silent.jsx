import "./Silent.css";
import {NavLink} from "react-router-dom";
import Relic from "../../components/relic/Relic";
import DeckCard from "../../components/deckcard/DeckCard";

import ringOfTheSnake from "./images/ring-of-the-snake-image.png";
import sneckoSkull from "./images/snecko-skull-image.png";
import ninjaScroll from "./images/ninja-scroll-image.png";
import paperKrane from "./images/paper-krane-image.png";
import theSpecimen from "./images/the-specimen-image.png";
import tingsha from "./images/tingsha-image.png";
import toughBandages from "./images/tough-bandages-image.png";
import hoveringKite from "./images/hovering-kite-image.png";
import ringOfTheSerpent from "./images/ring-of-the-serpent-image.png";
import wristBlade from "./images/wrist-blade-image.png";
import twistedFunnel from "./images/twisted-funnel-image.png";

import strike from "./images/silent-strike-image.png";
import defend from "./images/silent-defend-image.png";
import neutralize from "./images/neutralize-image.png";
import survivor from "./images/survivor-image.png";

const Silent = () => {
    return (
        <div id="silent" className="page">
            <section id="silent-hero">
                <h1 className="character-screen-hero-title">
                    The<br />Silent
                </h1>
                <p className="character-screen-hero-description">
                    A deadly huntress who relies on poison, shivs, and
                    precise control to outlast every enemy in the Spire.
                </p>
                <p className="character-screen-starting-health">
                    Starting HP: 70
                </p>
                <p className="character-screen-starting-relic">
                    Starting Relic: Ring of the Snake
                </p>
            </section>

            <section id="silent-relic-section">
                <h1 className="character-screen-relic-heading">
                    Silent Relics
                </h1>
                <p className="character-screen-relic-subheading">
                    Silent Collection
                </p>
                <section className="character-screen-relic-card-section">
                    <NavLink
                        className="character-screen-relic-card-link"
                        to="/ring-of-the-snake"
                    >
                        <Relic
                            name="Ring of the Snake"
                            description="Start combat: draw 2 more cards."
                            src={ringOfTheSnake}
                        />
                    </NavLink>
                    <Relic
                        name="Snecko Skull"
                        description="Poison applies 1 extra Poison."
                        src={sneckoSkull}
                    />
                    <Relic
                        name="Ninja Scroll"
                        description="Start combat with 3 Shivs."
                        src={ninjaScroll}
                    />
                    <Relic
                        name="Paper Krane"
                        description="Weak reduces damage by 40%."
                        src={paperKrane}
                    />
                    <Relic
                        name="The Specimen"
                        description="When an enemy dies, transfer its Poison."
                        src={theSpecimen}
                    />
                    <Relic
                        name="Tingsha"
                        description="Discard: deal 3 damage to a random enemy."
                        src={tingsha}
                    />
                    <Relic
                        name="Tough Bandages"
                        description="Discard: gain 3 Block."
                        src={toughBandages}
                    />
                    <Relic
                        name="Hovering Kite"
                        description="First discard each turn: gain 1 Energy."
                        src={hoveringKite}
                    />
                    <Relic
                        name="Ring of the Serpent"
                        description="Start combat: draw 1 more card."
                        src={ringOfTheSerpent}
                    />
                    <Relic
                        name="Wrist Blade"
                        description="0-cost attacks deal +4 damage."
                        src={wristBlade}
                    />
                    <Relic
                        name="Twisted Funnel"
                        description="Start combat: apply 4 Poison to all enemies."
                        src={twistedFunnel}
                    />
                </section>
            </section>

            <section id="silent-deck-section">
                <h1 className="character-screen-deck-heading">
                    Starting Deck
                </h1>
                <p className="character-screen-deck-description">
                    The Silent begins with 5 Strikes, 5 Defends,
                    Neutralize, and Survivor.
                </p>
                <section className="character-screen-deck-card-section">
                    <NavLink
                        className="character-screen-deck-card-link"
                        to="/silent-strike"
                    >
                        <DeckCard title="Silent Strike" src={strike} />
                    </NavLink>
                    <DeckCard title="Silent Strike" src={strike} />
                    <DeckCard title="Silent Strike" src={strike} />
                    <DeckCard title="Silent Strike" src={strike} />
                    <DeckCard title="Silent Strike" src={strike} />
                    <DeckCard title="Silent Defend" src={defend} />
                    <DeckCard title="Silent Defend" src={defend} />
                    <DeckCard title="Silent Defend" src={defend} />
                    <DeckCard title="Silent Defend" src={defend} />
                    <DeckCard title="Silent Defend" src={defend} />
                    <DeckCard title="Survivor" src={survivor} />
                    <DeckCard title="Neutralize" src={neutralize} />
                </section>
            </section>
        </div>
    );
};

export default Silent;