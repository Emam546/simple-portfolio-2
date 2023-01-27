import Header from "./header";
import Port from "./portfolio";
import "./style.css";
export default function PortoFolio() {
    return (
        <div className="portfolio" id="portfolio">
            <Header />
            <Port />
            <button className="more-button">More</button>
        </div>
    );
}
