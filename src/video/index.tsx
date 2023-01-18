import "./style.css"
export default function Video() {
    return (
        <div className="video-section">
            <video autoPlay loop muted>
                <source src="./images/awesome-video.mp4" type="video/mp4"/>
            </video>
            <div className="video-text-container">
                <h2>super awesome video</h2>
                <p>its all you need</p>
                <div className="video-more-button">see more</div>
            </div>
        </div>
    );
}
