import React from "react";
import NavBarBottom from "../components/LandingPage/NavBarBottom";
import Wrapper from "../styles/LandingPage";
import { useSelector } from "react-redux";
import IconGroup from "../components/LandingPage/IconGroup";

const LandingPage = () => {
  const project = useSelector((state) => state.project);
  const path = useSelector(state=>state.path);
  let newPath = path;
  if(newPath==="CHRONOLOGICAL") newPath = "year";
  if(newPath==="RANDOM")  newPath = "location";
  if(newPath==="LIST-VIEW") newPath = "status";

  let brr = [[]];
  if (project.length > 0) {
    brr[0][0] = project[0];
  }
  let j = 0,
    k = 0;
  for (let i = 1; i < project.length; i++) {
    if (project[i - 1].data[newPath.toLowerCase()] !== project[i].data[newPath.toLowerCase()]) {
      j++;
      k = 0;
      brr[j] = [];
    }
    brr[j][k] = project[i];
    k++;
  }
 
  return (
    <Wrapper>
      <div className="full-destop">
        {project &&
          brr.map((item, index) => (
            <IconGroup key={index} Name={item[0].data[newPath.toLowerCase()]} arr={brr[index]} />
          ))}
      </div>
      <div className="navbar">
        <NavBarBottom />
      </div>
    </Wrapper>
  );
};

export default LandingPage;
