import "./Video.css";

const Video = () => {
    return (
        <section id="video-section">
            <h1 id="video-heading">See the Spire in Action</h1>
            <div id="video-container">
                <iframe
                    src="https://www.youtube.com/embed/9SZUtyYSOjQ"
                    title="Slay the Spire Official Launch Trailer"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    );
};

export default Video;