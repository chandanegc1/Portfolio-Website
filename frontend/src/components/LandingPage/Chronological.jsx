import React from 'react'
import Wrapper from '../../styles/Projects'
import { projects } from "../../utils/constants";
import IconGroup from './IconGroup';
const Chronological = () => {
  return (
    <Wrapper>
      <div className="full-destop fade-in">
        {
         projects.length > 0 &&  projects.map((project, index) => (<IconGroup key={`${project.data.year}__${index}`} Name={project?.data?.year} projects={projects} />))
        }

      </div>
    </Wrapper>
  )
}

export default Chronological;