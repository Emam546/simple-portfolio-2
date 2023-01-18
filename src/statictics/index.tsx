import "./style.css";
export default function Statistics() {
    return (
        <div className="static">
            <div className="container">
                <div className="card">
                    <i className="fa fa-mug-hot"></i>
                    <h1>1,263</h1>
                    <p>coffee drinks</p>
                </div>
                <div className="card">
                    <i className="fa fa-folder"></i>
                    <h1>256</h1>
                    <p>completed projects</p>
                </div>
                <div className="card">
                    <i className="fa fa-envelope"></i>
                    <h1>1,743</h1>
                    <p>mail send</p>
                </div>
                <div className="card">
                    <i className="fa fa-trophy"></i>
                    <h1>17</h1>
                    <p>awards received</p>
                </div>
            </div>
        </div>
    );
}
