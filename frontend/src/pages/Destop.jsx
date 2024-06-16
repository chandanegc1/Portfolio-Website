import React, { useContext} from "react";
import NavBarBottom from "../components/NavBarBottom";
import Wrapper from "../styles/Projects";
import Status from "../components/Status";
import Chronological from "../components/Chronological";
import { MyContext } from "../contextAPI/ContexApi";
import Scale from "../components/Scale";
import Programmatic from "../components/Programmatic";

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
