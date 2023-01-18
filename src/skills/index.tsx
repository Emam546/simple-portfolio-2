import { ReactNode } from "react";
import "./style.css";
function Bar({ children, percent }: { children: ReactNode; percent: string }) {
    return (
        <li>
            {children}
            <span style={{ width: percent }}>
                <i className="material-symbols-outlined" percent={percent}>
                    mode_comment
                </i>
            </span>
        </li>
    );
}
export default function Skills() {
    return (
        <div className="skills">
            <div className="container">
                <div className="feedBack">
                    <h1>testimonials</h1>
                    <p>
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor
                        at sem,accumsan id imperdiet et, porttitor at sem
                    </p>
                    <div className="skill-users">
                        <div className="person">
                            <div className="img-holder">
                                <img src="./images/skills-01.jpg" alt="" />
                            </div>
                            <div className="skill-text">
                                <p>
                                    Curabitur arcu erat, accumsan id imperdiet
                                    et, porttitor at sem
                                </p>
                                <h6>Jeo Deo Seo Ceo</h6>
                            </div>
                        </div>
                        <div className="person">
                            <div className="img-holder">
                                <img src="./images/skills-02.jpg" alt="" />
                            </div>
                            <div className="skill-text">
                                <p>
                                    Curabitur arcu erat, accumsan id imperdiet
                                    et, porttitor at sem
                                </p>
                                <h6>Jeo Deo Seo Ceo</h6>
                            </div>
                        </div>
                    </div>
                    <ul className="shuffle">
                        <li></li>
                        <li className="active"></li>
                        <li></li>
                    </ul>
                </div>
                <div className="skills-bar">
                    <h1>Our skills</h1>
                    <p>
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor
                        at sem,accumsan id imperdiet et, porttitor at sem
                    </p>
                    <ul className="bars">
                        <Bar percent="100%">html css</Bar>
                        <Bar percent="70%">css</Bar>
                        <Bar percent="90%">Nodejs</Bar>
                        <Bar percent="80%">React</Bar>
                        <Bar percent="85%">typescript</Bar>
                    </ul>
                </div>
            </div>
        </div>
    );
}
