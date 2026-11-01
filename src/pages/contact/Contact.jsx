import "./Contact.css";
import {useState} from "react";

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.target);
        formData.append("access_key", "7b0d8094-bd65-46e0-8b00-37ebfbd72a9a");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Email Sent");
            setTimeout(() => {setResult("");}, 3000);

            event.target.reset();
        } else {
            setResult("Error");
        }
    };

    return (
        <div id="contact" className="page">
            <section id="contact-section">
                <h1 id="contact-heading">Contact Me</h1>
                <p id="contact-description">
                    Have a question about The Spire Character Compendium?
                    Send me a message.
                </p>

                <form id="contact-form" onSubmit={onSubmit}>
                    <p>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                        />
                    </p>
                    <p>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                        />
                    </p>
                    <p>
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                        ></textarea>
                    </p>
                    <p>
                        <button type="submit">Send Message</button>
                    </p>
                    <p>{result}</p>
                </form>
            </section>
        </div>
    );
};

export default Contact;