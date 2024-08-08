import React, { useState } from "react";
import { useSelector } from "react-redux";
import { transformTo2DArray } from "../utils/Sortedarray";
import NavBarBottom from "../components/LandingPage/NavBarBottom";

const Test2 = () => {
  const project = useSelector((state) => state.project);
  const path = useSelector((state) => state.path);
  let newPath = path;
  if (newPath === "CHRONOLOGICAL") newPath = "year";
  if (newPath === "RANDOM") newPath = "location";
  if (newPath === "LIST-VIEW") newPath = "status";
  let projects = transformTo2DArray(project, newPath.toLowerCase());

  // const [rowIndex, setrow] = useState(1);
  // let columnIndex = 1;
  return (
    <div className="container-p">
      {
      projects.map((row, rowIndex) =>
        row.map((value, columnIndex) =>(
          <div
            className="box-p"
            style={{
              transform: `translate(${rowIndex * 100}px, ${columnIndex * 15}px)`,
              transition: `0.5s`,
              
            }}
            key={value.id}
          >
            {rowIndex + "" + columnIndex}
          </div>
         ))
      )
      } 
      <div className="nav">
        <NavBarBottom /> 
       
        {/* <button onClick={()=>{setrow(rowIndex+1)}}>click here</button>
        <button onClick={()=>{setrow(0+1)}}>click here for 0</button> */}
      </div>
    </div>
  );
};

export default Test2;
