import "./Footer.css";
import Navigation from "../navigation/Navigation";

const Footer = () => {
    return (
        <footer id="main-footer">
            <section id="footer-info">
                <h2 id="footer-title">
                    The Spire Character<br />Compendium
                </h2>
                <p id="footer-text">
                    A visual guide to the characters, starting decks,
                    and relics of Slay the Spire.
                </p>
                <p id="footer-copyright">Copyright Dylan Diaz</p>
            </section>
            <Navigation />
        </footer>
    );
};

export default Footer;