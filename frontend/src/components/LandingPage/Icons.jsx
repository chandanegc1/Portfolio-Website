import React, { useState } from "react";
import Wrapper from "../../styles/Icons";

const Icons = ({ initialImg, hoverImage, Name, fullName }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [istrue, setIsTrue] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsTrue(!istrue);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsTrue(!istrue);
  };

  return (
    <Wrapper>
      <div className="main-box">
        <div
          className="box"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={istrue ? hoverImage : initialImg} alt={Name} />
          <p
            className="p-name"
            style={{ display: isHovered ? "block" : "none" }}
          >
            {fullName}
          </p>
        </div>
        <p>{Name}</p>
      </div>
    </Wrapper>
  );
};

export default Icons;
