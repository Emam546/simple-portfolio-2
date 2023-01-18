import Responsive from "./responsive";
import "./style.css";
export function Services() {
    return (
        <div className="services">
            <div className="container">
                <div className="special-heading">
                    <h2>SERVICES</h2>
                    <p>
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor
                        at sem. Mauris blandit aliquet elit, eget tincidunt nibh
                        pulvinar a
                    </p>
                </div>
                <div className="services-content">
                    <div className="srv">
                        <i className="material-symbols-outlined srv-icon">photo_camera</i>
                        <div className="text-content">
                            <h3>Vorem amet intutie</h3>
                            <p>
                                Curabitur arcu erat, accumsan id imperdiet et,
                                porttitor at sem. Mauris blandit aliquet elit,
                                eget tincidunt nibh pulvinar a
                            </p>
                        </div>
                    </div>
                    <div className="srv">
                        <i className="material-symbols-outlined srv-icon">slideshow</i>
                        <div className="text-content">
                            <h3>Vorem amet intutie</h3>
                            <p>
                                Curabitur arcu erat, accumsan id imperdiet et,
                                porttitor at sem. Mauris blandit aliquet elit,
                                eget tincidunt nibh pulvinar a
                            </p>
                        </div>
                    </div>
                    <div className="srv">
                        <i className="material-symbols-outlined srv-icon">perm_camera_mic</i>
                        <div className="text-content">
                            <h3>Vorem amet intutie</h3>
                            <p>
                                Curabitur arcu erat, accumsan id imperdiet et,
                                porttitor at sem. Mauris blandit aliquet elit,
                                eget tincidunt nibh pulvinar a
                            </p>
                        </div>
                    </div>
                    <div className="srv">
                        <i className="material-symbols-outlined srv-icon">calculate</i>
                        <div className="text-content">
                            <h3>Vorem amet intutie</h3>
                            <p>
                                Curabitur arcu erat, accumsan id imperdiet et,
                                porttitor at sem. Mauris blandit aliquet elit,
                                eget tincidunt nibh pulvinar a
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default function (){
    return <>
        <Services />
        <Responsive />
    </>
}
