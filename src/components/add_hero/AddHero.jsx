import "./AddHero.css";
import {useState} from "react";
import { API_BASE_URL } from "../../config";

const AddHero = (props) => {
    const [prevSrc, setPrevSrc] = useState("");
    const [result, setResult] = useState("");

    const uploadImage = (e) => {
        if(e.target.files[0]){
            setPrevSrc(URL.createObjectURL(e.target.files[0]));
        } else {
            setPrevSrc("");
        }
    };

    const addHeroToServer = async(e) => {
        e.preventDefault();
        setResult("Sending ...");

        const form = e.target;
        const formData = new FormData(form);

        try {
            const response = await fetch(`${API_BASE_URL}/api/heroes`, {
                method:"POST",
                body:formData
            });

            if(response.status === 200){
                props.add_hero_to_list(await response.json());
                setResult("Hero successfully added");
                form.reset();
                setPrevSrc("");
            } else {
                setResult(await response.text());
            }
        } catch(error){
            setResult("Error adding hero");
        }
    };

    return (
        <div id="add-hero-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span
                        id="dialog-close"
                        className="w3-button w3-display-topright"
                        onClick={props.close_dialog}
                    >
                        &times;
                    </span>
                </div>

                <h2>Add Hero</h2>

                <form onSubmit={addHeroToServer}>
                    <p>
                        <label htmlFor="name">Hero Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            minLength="3"
                        />
                    </p>

                    <p>
                        <label htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            name="description"
                            required
                            minLength="3"
                        ></textarea>
                    </p>

                    <p>
                        <label htmlFor="emoji">Emoji:</label>
                        <input
                            type="text"
                            id="emoji"
                            name="emoji"
                            required
                        />
                    </p>

                    <p>
                        <label htmlFor="color">Card Color:</label>
                        <select id="color" name="color" required>
                            <option value="ironclad-color">Red</option>
                            <option value="silent-color">Green</option>
                            <option value="defect-color">Blue</option>
                            <option value="watcher-color">Purple</option>
                        </select>
                    </p>

                    <section>
                        <p>
                            {prevSrc === "" ? ("") : (
                                <img
                                    id="img-prev"
                                    src={prevSrc}
                                    alt="Hero preview"
                                />
                            )}
                        </p>

                        <p>
                            <label htmlFor="img">Select Image:</label>
                            <input
                                type="file"
                                id="img"
                                name="img"
                                accept="image/*"
                                onChange={uploadImage}
                                required
                            />
                        </p>
                    </section>

                    <p>
                        <button type="submit">Add Hero</button>
                    </p>

                    <p id="status-message">{result}</p>
                </form>
            </div>
        </div>
    );
};

export default AddHero;