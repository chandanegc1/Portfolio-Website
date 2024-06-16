import React from "react";
import ProjectIcons from "./ProjectIcons";
import Wrapper from "../styles/IconGroup";
import { useNavigate } from "react-router-dom";

const IconGroup = ({ Name, arr }) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className="destop-content">
        <div className="icon-group">
          <div className="box-icon">
            {arr.map((item) => (
              <div className="icon-click" onClick={()=>navigate("/project" , {state:{item}})}>
                <ProjectIcons
                hoverImage={item.initialImg}
                initialImg={item.hoverImage}
                Name={item.name}
                Link={item.link}
              />
              </div>
            ))}
          </div>
          <h3>{Name}</h3>
        </div>
      </div>
    </Wrapper>
  );
};

export default IconGroup;
