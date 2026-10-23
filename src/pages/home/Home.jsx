import "./Home.css";
import HeroCard from "../../components/herocard/HeroCard";
import StepCard from "../../components/stepcard/StepCard";
import ironclad from "./images/ironclad-image.png";
import silent from "./images/silent-image.png";
import defect from "./images/defect-image.png";
import watcher from "./images/watcher-image.png";

const Home = () => {
    return (
        <div id="home" className="page">
            <section id="hero-section">
                <h1 id="hero-heading">Climb<br />the Spire</h1>
                <p id="hero-text">
                    A visual guide to Slay the Spire’s four playable characters,
                    <br />their starting decks, and their signature relics.
                </p>
            </section>

            <section id="choose-section">
                <h1 id="choose-heading">Choose Your Hero</h1>
                <section id="hero-card-section">
                    <HeroCard
                        title="The Ironclad"
                        description="Uses strength and can heal by taking damage"
                        emoji="⚔️"
                        color="ironclad-color"
                        link="/ironclad"
                        src={ironclad}
                    />
                    <HeroCard
                        title="The Silent"
                        description="Uses poison and many small attacks"
                        emoji="🧪"
                        color="silent-color"
                        link="/silent"
                        src={silent}
                    />
                    <HeroCard
                        title="The Defect"
                        description="Uses orbs for damage and defense"
                        emoji="⚡"
                        color="defect-color"
                        link="/defect"
                        src={defect}
                    />
                    <HeroCard
                        title="The Watcher"
                        description="Switches stances to deal more damage"
                        emoji="☯️"
                        color="watcher-color"
                        link="/watcher"
                        src={watcher}
                    />
                </section>
                <p id="choose-hero-text">
                    Not sure who to play? Let fate decide.
                </p>
                <button id="btn-choose-hero">Choose for Me</button>
                <p id="hero-choice"></p>
            </section>

            <section id="steps-section">
                <h1 id="steps-heading">Build A Deck that Can<br />Climb</h1>
                <section id="steps-card-section">
                    <StepCard
                        number="01"
                        title="Choose A Path"
                        description="Each path can lead to fights, rewards, or events."
                    />
                    <StepCard
                        number="02"
                        title="Play Your Cards"
                        description="Use your energy to attack, block, and plan ahead."
                    />
                    <StepCard
                        number="03"
                        title="Shape Your Deck"
                        description="Be selective with your cards. A bloated deck is just as bad as no deck."
                    />
                </section>
            </section>
        </div>
    );
};

export default Home;