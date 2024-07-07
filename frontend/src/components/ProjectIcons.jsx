import React, { useState } from "react";
import Wrapper from "../styles/ProjectIcons";

const ProjectIcons = ({ initialImg, hoverImage, Name , fullName }) => {
  const [ImageSrc, setImageSrc] = useState(initialImg);
  const [isDisplay, setIsDisplay] = useState(true);

  function toggleDisplay() {
    setIsDisplay(!isDisplay);
  }

  return (
    <Wrapper>
      <div className="main-box">
        <div
          className="box"
          onMouseEnter={() => {setImageSrc(hoverImage);toggleDisplay()}}
          onMouseLeave={() => {setImageSrc(initialImg);toggleDisplay()}}
        >
          <img src={ImageSrc} alt={Name} />
          <p className="p-name" 
            style={{ display: isDisplay ? "none" : "block" , position:"fixed"}}
          >
            {fullName}
          </p>
        </div>
        <p>{Name}</p>
      </div>
    </Wrapper>
  );
};

export default ProjectIcons;
