import "./style.css";
export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <img src="./images/logo.png" alt="" className="foot-logo" />
                <h2>we are social</h2>
                <div className="icons">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-youtube"></i>
                    <i className="fab fa-linkedin"></i>
                </div>
                <p className="copy-right">
                    &copy; 2021 - <span>kasper</span> All rights reserved
                </p>
            </div>
        </footer>
    );
}
