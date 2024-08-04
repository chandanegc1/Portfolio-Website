import React, { useContext } from 'react'
import Wrapper from '../../styles/Projects'
import IconGroup from './IconGroup';
import { ProjectData } from '../../contextAPI/ContexApi';

const Chronological = () => {
  const {project} = useContext(ProjectData);
  return (
    <Wrapper>
     <div className="full-destop">
        <IconGroup arr={project}/>
      </div>
    </Wrapper> 
  )
}

export default Chronological;