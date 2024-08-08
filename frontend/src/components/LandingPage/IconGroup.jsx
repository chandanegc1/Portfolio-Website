import React from "react";
import Icons from "./Icons";
import Wrapper from "../../styles/IconGroup";
import { useNavigate } from "react-router-dom";
import { nanoid } from 'nanoid';

const IconGroup = ({ Name, projectRow }) => {
  const navigate = useNavigate();
  console.log(projectRow[0]) 
  return (
    <Wrapper>
      <div className="destop-content">
        <div className="icon-group">
          <h3>{Name}</h3>
          <div className="box-icon">
            {projectRow.map((item) => (
              <div
                key={nanoid()}
                className="icon-click"
                onClick={() => navigate("/project", { state: { item } })}
              >
                <Icons data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default IconGroup;
