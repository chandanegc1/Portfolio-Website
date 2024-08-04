import React from 'react'
import Wrapper from '../../styles/Projects'
import { projects } from "../../utils/constants"; 
import IconGroup from './IconGroup';
const Chronological = () => {
  return (
    <Wrapper>
     <div className="full-destop fade-in">
        <IconGroup Name="2001" projects={projects} />
        <IconGroup Name="2000" projects={projects} />
        <IconGroup Name="2000" projects={projects} />
        <IconGroup Name="2000" projects={projects} />
        <IconGroup Name="2000" projects={projects} />
        <IconGroup Name="2000" projects={projects} />
        <IconGroup Name="2000" projects={projects} />
        <IconGroup Name="2000" projects={projects} />
        <IconGroup Name="2000" projects={projects} />
        <IconGroup Name="2000" projects={projects} />
      </div>
    </Wrapper> 
  )
}

export default Chronological;