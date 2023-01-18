import "./style.css"
export default function Header() {
    return (
        <div className="port-header">
            <div className="container">
                <div className="special-heading">
                    <h2>Portfolio</h2>
                    <p>
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor
                        at sem. Mauris blandit aliquet elit, eget tincidunt nibh
                        pulvinar a.
                    </p>
                </div>
                <ul className="shuffle">
                    <li className="active">all</li>
                    <li>nodejs</li>
                    <li>react</li>
                    <li>python</li>
                    <li>Java</li>
                </ul>
            </div>
        </div>
    );
}
