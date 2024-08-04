import React, { useContext, useState } from "react";
import Wrapper from "../../styles/NavBarBottom.js";
import { ProjectData } from "../../contextAPI/ContexApi.js";
import { Link } from "react-router-dom";

const NavBarBottom = () => {
  const {navPath, setNavPath} = useContext(ProjectData);
  const handleClick = (e)=>{
    setNavPath(e);
  }
  return (
    <Wrapper>
      <div class="container">
        <div className="header">
          <header className="main-header">
            <Link to="/information"><h3>INFO</h3></Link>
            <nav>
              <ul>
                <li className={navPath==="RANDOM"?"color-red":null} onClick={()=>handleClick("RANDOM")}>
                  RANDOM
                </li>
                <li className={navPath==="CHRONOLOGICAL"?"color-red":null} onClick={()=>handleClick("CHRONOLOGICAL")}>
                  CHRONOLOGICAL
                </li>
                <li className={navPath==="STATUS"?"color-red":null} onClick={()=>handleClick("STATUS")}>
                 STATUS
                </li>
                <li className={navPath==="LOCATION"?"color-red":null} onClick={()=>handleClick("LOCATION")}>
                 LOCATION
                </li>
                <li className={navPath==="LIST-VIEW"?"color-red":null} onClick={()=>handleClick("LIST-VIEW")}>
                 LIST-VIEW
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </div>
    </Wrapper>
  );
};

export default NavBarBottom;
