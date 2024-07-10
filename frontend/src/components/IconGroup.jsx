import React from "react";
import Icons from "./Icons";
import Wrapper from "../styles/IconGroup";
import { useNavigate } from "react-router-dom";

const IconGroup = ({ Name, arr }) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className="destop-content">
        <div className="icon-group">
        <h3>{Name}</h3>
          <div className="box-icon">
            {arr.map((item) => (
              <div className="icon-click" onClick={()=>navigate("/project" , {state:{item}})}>
                <Icons
                hoverImage={item.hoverImage}
                initialImg={item.initialImg}
                Name={item.name}
                fullName={item.data.name}
                Link={item.link}
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
