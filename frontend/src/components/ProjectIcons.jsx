import React, { useState } from "react";
import Wrapper from "../styles/ProjectIcons";

const ProjectIcons = ({ initialImg, hoverImage, Name, Link }) => {
  const [ImageSrc, setImageSrc] = useState(initialImg);
  return (
    <Wrapper>
      <div className="main-box">
        <div
          className="box"
          onMouseEnter={() => setImageSrc(hoverImage)}
          onMouseLeave={() => setImageSrc(initialImg)}
        >
          <img src={ImageSrc} alt={Name} />
        </div>
        <p>{Name}</p>
      </div>
    </Wrapper>
  );
};

export default ProjectIcons;
