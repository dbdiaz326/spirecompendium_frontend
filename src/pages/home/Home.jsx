import "./Home.css";
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import HeroCard from "../../components/herocard/HeroCard";
import StepCard from "../../components/stepcard/StepCard";
import Video from "../../components/video/Video";

const Home = () => {
    const [heroes, setHeroes] = useState([]);
    const [heroChoice, setHeroChoice] = useState("");
    const [choosing, setChoosing] = useState(false);
    const navigate = useNavigate();

    //after the page has loaded
    useEffect(()=>{
        const loadHeroes = async()=>{
            const response = await axios.get("https://spirecompendium-backend.onrender.com/api/heroes");
            setHeroes(response.data);
        };

        loadHeroes();
    },[]);

    const chooseHero = () => {
        const heroes = ["Ironclad", "Silent", "Defect", "Watcher"];
        const heroPages = ["/ironclad", "/silent", "/defect", "/watcher"];

        const heroNum = Math.floor(Math.random() * heroes.length);

        setHeroChoice(`You got The ${heroes[heroNum]}!`);
        setChoosing(true);

        setTimeout(() => {
            navigate(heroPages[heroNum]);
            setHeroChoice("");
            setChoosing(false);
        }, 1200);
    };

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
                    {heroes.map((hero)=>(
                        <HeroCard
                            key={hero._id}
                            title={hero.name}
                            description={hero.description}
                            emoji={hero.emoji}
                            color={hero.color}
                            link={hero.link}
                            src={`https://spirecompendium-backend.onrender.com/images/${hero.main_image}`}
                        />
                    ))}
                </section>
                <p id="choose-hero-text">
                    Not sure who to play? Let fate decide.
                </p>
                <button
                    id="btn-choose-hero"
                    onClick={chooseHero}
                    disabled={choosing}
                >
                    Choose for Me
                </button>
                <p id="hero-choice">{heroChoice}</p>
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
            <Video />
        </div>
    );
};

export default Home;