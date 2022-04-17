import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import ShrubStory from '../components/sections/ShrubStory';
import Partnerships from "../components/sections/Partnerships";
import Team from "../components/sections/Team";
import Grants from "../components/sections/Grants";
import ShrubPaper from "../components/sections/ShrubPaper";
import PaperGardens from "../components/sections/PaperGardens";
import ReactGA from "react-ga";


const Main = () => {

    return (
        <><div className={"banner"}>&#129489;&#8205;&#127806; <ReactGA.OutboundLink eventLabel="Banner link to Paper gardens" to="https://gardens.shrub.finance" target="_blank" rel='noopener noreferrer'>
           &nbsp; <a title="Go to Paper Gardens App">Shrub's Genesis NFT series - Paper Gardens </a>
        </ReactGA.OutboundLink></div>
            <Hero className="illustration-section-01" />
            <ShrubStory invertMobile imageFill className="illustration-section-02" />
            <ShrubPaper/>
            <PaperGardens/>
            <Team/>
            <Partnerships/>
            <Grants/>
        </>
    );
}

export default Main;