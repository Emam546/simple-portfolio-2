import "./style.css";
export function Subscribe() {
    return (
        <div className="subscribe" id="subscribe">
            <div className="container">
                <form className="input-email">
                    <input type="text" className="email" placeholder="YOUR MAIL" />
                    <button type="submit">subscribe</button>
                </form>
                <p>
                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                    sem. Mauris blandit aliquet elit, eget tincidunt nibh
                    pulvinar a
                </p>
            </div>
        </div>
    );
}
