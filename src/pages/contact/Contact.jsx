import "./Contact.css";

const Contact = () => {
    return (
        <div id="contact" className="page">
            <section id="contact-section">
                <h1 id="contact-heading">Contact Me</h1>
                <p id="contact-description">
                    Have a question about The Spire Character Compendium?
                    Send me a message.
                </p>

                <form id="contact-form">
                    <p>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" />
                    </p>
                    <p>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                    </p>
                    <p>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message"></textarea>
                    </p>
                    <p>
                        <button type="button">Send Message</button>
                    </p>
                </form>
            </section>
        </div>
    );
};

export default Contact;