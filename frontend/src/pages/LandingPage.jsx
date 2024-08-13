import React from "react";
import NavBarBottom from "../components/LandingPage/NavBarBottom";
import Wrapper from "../styles/LandingPage";
import { useSelector } from "react-redux";
import IconGroup from "../components/LandingPage/IconGroup";
import { transformTo2DArray } from "../utils/Sortedarray";

const LandingPage = () => {
  const project = useSelector((state) => state.project);
  const path = useSelector(state=>state.path);

  let newPath = path;
  switch(newPath){
    case "CHRONOLOGICAL":
      newPath = "year";
      break;
    case "TYPOLOGY":
      newPath = "category";
      break;
    default:
      break;
  }
  let projects = transformTo2DArray(project, newPath.toLowerCase());
  return (
    <Wrapper>
      <div className="full-destop">
        {project &&
          projects.map((item, index) => (
            <IconGroup key={index}  Name={item[0].data[newPath.toLowerCase()]} projectRow={item} />
          ))
        } 
      </div>
      <div className="navbar">
        <NavBarBottom />
      </div>
    </Wrapper>
  );
};

export default LandingPage;
