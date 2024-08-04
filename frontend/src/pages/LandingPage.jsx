import React, { useContext, useReducer} from "react";
import NavBarBottom from "../components/InformationPage/NavBarBottom";
import Wrapper from "../styles/Projects";
import Status from "../components/LandingPage/Status";
import Chronological from "../components/LandingPage/Chronological";
import { MyContext } from "../contextAPI/ContexApi";
import Scale from "../components/LandingPage/Scale";
import Programmatic from "../components/LandingPage/Programmatic";
import { projects } from "../utils/constants";

const reducer = (state, action) => {
  switch (action.type) {
    case "STATUS":
      // return state.sort()
    case "CHRONOLOGICAL":
      return state.sort((a, b) => a.data.year - b.data.year);
    case "SCALE":
      return // upddated state
    case "PROGRAMMATIC":
      return // updated sate
    default:
      return //updated
  }
}
const Destop = () => {
  const {item} = useContext(MyContext);
 const [projectDetatails, dispatchCallback] =  useReducer(reducer, projects);

 const handleOnProejctClick = (type) => {
   // redirect to Project page with the project details on route
   <Navigator to = {`/project/${type}`} state={project}/>
 }

 const list =  [ "chromological", "status", "scale", "programmatic"];
  return (
    <Wrapper>
     {projects.map((project, index) => {
      return <Project
       key={`${project.data.year}__${index}`}
        Name={project?.data?.year}
        projects={projects}
        onClick=(() => handleOnProejctClick(project))
        />
     }

     list.map((item, index) => {
      <button onClick={dispatchCallback({}, {type: item})}>{item}</button>
})
    </Wrapper>
  );
};

export default Destop;
