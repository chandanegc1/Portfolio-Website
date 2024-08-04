import React, { useContext} from "react";
import NavBarBottom from "../components/InformationPage/NavBarBottom";
import Wrapper from "../styles/Projects";
import Status from "../components/LandingPage/Status";
import Chronological from "../components/LandingPage/Chronological";
import {ProjectData } from "../contextAPI/ContexApi";
import Location from "../components/LandingPage/Location";
import Random from "../components/LandingPage/Random";

const Destop = () => {
  const {navPath} = useContext(ProjectData);
  return (
    <Wrapper>
      {navPath==="STATUS"?<Status/>:navPath==="CHRONOLOGICAL"?<Chronological/>:navPath==="LOCATION"?<Location/>:navPath==="RANDOM"?<Random/>:null}
      {/* <Chronological/> */}
      <div className="navbar">
        <NavBarBottom />
      </div>
    </Wrapper>
  );
};

export default Destop;
