import React from "react";
import ProjectIcons from "./ProjectIcons";
import Wrapper from "../styles/IconGroup";
const IconGroup = ({ Name, arr }) => {
  return (
    <Wrapper>
      <div className="destop-content">
        <div className="icon-group">
          <div className="box-icon">
            {arr.map((item) => (
              <ProjectIcons
                hoverImage={item.initialImg}
                initialImg={item.hoverImage}
                Name={item.name}
                Link={item.link}
              />
            ))}
          </div>
          <h3>{Name}</h3>
        </div>
      </div>
    </Wrapper>
  );
};

export default IconGroup;
