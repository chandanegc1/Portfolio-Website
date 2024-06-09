import React from "react";
import Wrapper from "../styles/NavBarBottom.js";

const NavBarBottom = () => {
  return (
    <Wrapper>
      <div class="container">
        <div className="header">
          <header className="main-header">
            <h3>INFO</h3>
            <nav>
              <ul>
                <li>
                  <a href="#chronological">CHRONOLOGICAL</a>
                </li>
                <li>
                  <a href="#programmatic">PROGRAMMATIC</a>
                </li>
                <li>
                  <a href="#scale">SCALE</a>
                </li>
                <li>
                  <a href="#status">STATUS</a>
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
