import { useState } from "react";
import "./style.css";
export default function Header() {
    const [state, setState] = useState(false);
    return (
        <header className="header">
            <div className="container">
                <div className="header-logo">
                    <img src="./images/logo.png" alt="" />
                </div>
                <nav>
                    <i className="material-symbols-outlined toggle-menu" onClick={()=>setState(!state)}>
                        menu
                    </i>
                    <ul
                        className="header-pages"
                        style={!state?{ display: "none" }:{}}
                    >
                        <a href="">
                            <li className="selected">home</li>
                        </a>
                        <a href="">
                            <li>services</li>
                        </a>
                        <a href="">
                            <li>portfolio</li>
                        </a>
                        <a href="">
                            <li>about</li>
                        </a>
                        <a href="">
                            <li>pricing</li>
                        </a>
                        <a href="">
                            <li>contact</li>
                        </a>
                    </ul>
                    <form className="header-search">
                        <i className="material-symbols-outlined">search</i>
                    </form>
                </nav>
            </div>
        </header>
    );
}
