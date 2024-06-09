import React from "react";
import NavBarBottom from "../components/NavBarBottom";
import { arr, arr1 } from "../utils/constants";
import Wrapper from "../styles/Home";
import Status from "../components/IconGroup";

const Home = () => {
  return (
    <Wrapper>
      <div className="full-destop">
        <Status Name="IDEA" arr={arr} />
        <Status Name="INOVATION" arr={arr1} />
        <Status Name="CUNSTRUCTION" arr={arr1} />
        <Status Name="COMPLETE" arr={arr1} />
      </div>
      <div className="navbar">
        <NavBarBottom />
      </div>
    </Wrapper>
  );
};

export default Home;
