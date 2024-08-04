import React from "react";
import Icons from "./Icons";
import Wrapper from "../../styles/IconGroup";
import { useNavigate } from "react-router-dom";

const IconGroup = ({ Name, projects }) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className="destop-content">
        <div className="icon-group">
        <h3>{Name}</h3>
          <div className="box-icon">
            {projects.map((project, index) => (
              <div key={`${index}_${project.name}`} className="icon-click" onClick={()=>navigate("/project" , {state:{project}})}>
                <Icons
                key={project.name}
                hoverImage={project.hoverImage}
                initialImg={project.initialImg}
                Name={project.name}
                fullName={project.data.name}
                Link={project.link}
              />
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </Wrapper>
  );
};

export default IconGroup;
