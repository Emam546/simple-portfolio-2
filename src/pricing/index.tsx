import "./style.css";
export default function Pricing() {
    return (
        <div className="prices">
            <div className="container">
                <div className="special-heading">
                    <h2>Pricing</h2>
                    <p>
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor
                        at sem. Mauris blandit aliquet elit, eget tincidunt nibh
                        pulvinar a
                    </p>
                </div>
                <div className="features">
                    <div className="feat">
                        <div className="price">
                            <h3>Basic</h3>
                            <span>19</span>
                        </div>
                        <ul className="pros">
                            <li>Feature 1</li>
                            <li>Extra feature</li>
                            <li>Feature no 2</li>
                            <li>Feature</li>
                        </ul>
                        <div className="buy-button">
                            <span>Buy now</span>
                        </div>
                    </div>
                    <div className="feat">
                        <div className="price">
                            <h3>Premium</h3>
                            <span>29</span>
                        </div>
                        <ul className="pros">
                            <li>Feature 1</li>
                            <li>Extra feature</li>
                            <li>Feature no 2</li>
                            <li>Feature</li>
                        </ul>
                        <div className="buy-button">
                            <span>Buy now</span>
                        </div>
                    </div>
                    <div className="feat">
                        <div className="price">
                            <h3>pro</h3>
                            <span>39</span>
                        </div>
                        <ul className="pros">
                            <li>Feature 1</li>
                            <li>Extra feature</li>
                            <li>Feature no 2</li>
                            <li>Feature</li>
                        </ul>
                        <div className="buy-button">
                            <span>Buy now</span>
                        </div>
                    </div>
                    <div className="feat">
                        <div className="price">
                            <h3>platinum</h3>
                            <span>49</span>
                        </div>
                        <ul className="pros">
                            <li>Feature 1</li>
                            <li>Extra feature</li>
                            <li>Feature no 2</li>
                            <li>Feature</li>
                        </ul>
                        <div className="buy-button">
                            <span>Buy now</span>
                        </div>
                    </div>

                </div>
                    <div className="contact-us">
                        <h2>Contact us if you have special request</h2>
                        <span>contact us</span>
                    </div>
            </div>
        </div>
    );
}
