import React, { useContext, useState } from "react";
import Wrapper from "../styles/NavBarBottom.js";
import { MyContext } from "../contextAPI/ContexApi.js";
import { Link } from "react-router-dom";

const NavBarBottom = () => {
  const {item , setItem} = useContext(MyContext);
  const handleClick = (e)=>{
    setItem(e);
  }
  return (
    <Wrapper>
      <div class="container">
        <div className="header">
          <header className="main-header">
            <Link to="/information"><h3>INFO</h3></Link>
            <nav>
              <ul>
                <li className={item==="CHRONOLOGICAL"?"color-red":null} onClick={()=>handleClick("CHRONOLOGICAL")}>
                  CHRONOLOGICAL
                </li>
                <li className={item==="PROGRAMMATIC"?"color-red":null} onClick={()=>handleClick("PROGRAMMATIC")}>
                  PROGRAMMATIC
                </li>
                <li className={item==="SCALE"?"color-red":null} onClick={()=>handleClick("SCALE")}>
                 SCALE
                </li>
                <li className={item==="STATUS"?"color-red":null} onClick={()=>handleClick("STATUS")}>
                 STATUS
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
