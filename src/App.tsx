import About from "./about";
import Contact from "./contact";
import Footer from "./footer";
import Header from "./header";
import Landing from "./landing";
import Pricing from "./pricing";
import ProtoFolio from "./protfolio";
import Quote from "./quote";
import Services from "./services";
import Skills from "./skills";
import Statistics from "./statictics";
import { Subscribe } from "./subscribe";
import Video from "./video";

export default function App(){
    return <>
        <Header />
        <main>
            <Landing />
            <Services />
            <ProtoFolio />
            <Video />
            <About />
            <Statistics />
            <Skills />
            <Quote />
            <Pricing />
            <Subscribe />
            <Contact />
        </main>
        <Footer />
    </>
}