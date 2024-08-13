import React, { useState } from "react";
import Wrapper from "../../styles/Icons";
import { useSelector } from "react-redux";

const Icons = (data) => {
  const { initialImg, hoverImage, name } = data.data;
  let fullname = data.data.data.name;
  const path = useSelector((state) => state.path);
  console.log(path);
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
      <div className={path!="LIST-VIEW" ? "main-box": "main-box-list"}>
        <div
          className="box"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={istrue ? hoverImage : initialImg} alt={name} />
          <div className="name">
            <p className="logo-name"
             style={{ display: path=="LIST-VIEW" ? "block" : "none" }}
            >{name}</p>
            <p
              className="p-name"
              style={{ display: isHovered || path=="LIST-VIEW" ? "block" : "none" }}
            >
              {fullname}
            </p>
          </div>
        </div>
        <p className="logo-name"
          style={{ display: path!="LIST-VIEW" ? "block" : "none" }}
        >{name}</p>
      </div>
    </Wrapper>
  );
};

export default Icons;
