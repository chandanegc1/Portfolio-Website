import React, { useContext} from "react";
import NavBarBottom from "../components/InformationPage/NavBarBottom";
import Wrapper from "../styles/Projects";
import Status from "../components/LandingPage/Status";
import Chronological from "../components/LandingPage/Chronological";
import { MyContext } from "../contextAPI/ContexApi";
import Scale from "../components/LandingPage/Scale";
import Programmatic from "../components/LandingPage/Programmatic";

const Destop = () => {
  const {item} = useContext(MyContext);
  return (
    <Wrapper>
      {item==="STATUS"?<Status/>:item==="CHRONOLOGICAL"?<Chronological/>:item==="SCALE"?<Scale/>:item==="PROGRAMMATIC"?<Programmatic/>:<Chronological/>}
      <div className="navbar">
        <NavBarBottom />
      </div>
    </Wrapper>
  );
};

export default Destop;
