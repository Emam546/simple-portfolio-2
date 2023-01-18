import "./style.css";
export default function Landing() {
    return (
        <div className="landing">
            <div className="overlay"></div>
            <div className="landing-slider">
                <div className="text-container">
                    <div className="content">
                        <h2>
                            Hello World!
                            <br />
                            We Are Kasper We Make Art.
                        </h2>
                        <p>
                            Curabitur arcu erat, accumsan id imperdiet et,
                            porttitor at sem. Mauris blandit aliquet elit, eget
                            tincidunt nibh pulvinar a. Curabitur aliquet quam.
                            Accumsan id imperdiet et, porttitor at sem. Mauris
                            blandit aliquet elit, eget tincidunt.
                        </p>
                    </div>
                </div>
                <div className="container-buttons">
                    <button>
                        <i className="material-symbols-outlined">
                            arrow_back_ios
                        </i>
                    </button>
                    <button>
                        <i className="material-symbols-outlined">
                            arrow_forward_ios
                        </i>
                    </button>
                </div>
            </div>
            <ul className="slider-index">
                <li></li>
                <li className="active"></li>
                <li></li>
            </ul>
        </div>
    );
}
