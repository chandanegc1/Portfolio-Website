import React, { useState } from "react";
import Wrapper from "../../styles/Icons";

const Icons = (data) => {
  console.log(data);
  const { initialImg, hoverImage, name} = data.data;
  let fullname = data.data.data.name;
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
          <img src={istrue ? hoverImage : initialImg} alt={name} />
          <p
            className="p-name"
            style={{ display: isHovered ? "block" : "none" }}
          >
            {fullname}
          </p>
        </div>
        <p>{name}</p>
      </div>
    </Wrapper>
  );
};

export default Icons;
