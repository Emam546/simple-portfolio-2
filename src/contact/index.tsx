import "./style.css";
export default function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="container">
                <div className="special-heading">
                    <h2>Contact us</h2>
                    <p>
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor
                        at sem. Mauris blandit aliquet elit, eget tincidunt nibh
                        pulvinar a
                    </p>
                </div>
                <div className="main-content">
                    <form action="" className="info">
                        <input
                            type="text"
                            name="name"
                            placeholder="your name"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="your email"
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="your message"
                            required
                        />
                        <input type="submit" value="send message" />
                    </form>
                    <div className="about-us">
                        <div className="box">
                            <h4>Get In Touch</h4>
                            <p className="phone">+00 123.456.789</p>
                            <p className="phone">+00 123.456.789</p>
                        </div>
                        <div className="box">
                            <h4>Where We Are</h4>
                            <address>
                                Awesome Address 17
                                <br />
                                New York, NYC
                                <br />
                                123-4567-890
                                <br />
                                USA
                            </address>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
