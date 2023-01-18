import "./style.css"
export default function About() {
    return (
        <div className="about">
            <div className="special-heading">
                <h2>About</h2>
                <p>
                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                    sem
                </p>
            </div>
            <img src="./images/about.png" alt="" className="about-img" />
        </div>
    );
}
