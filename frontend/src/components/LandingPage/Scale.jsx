import React from 'react'
import Wrapper from '../../styles/Projects'
import { projects } from "../../utils/constants"; 
import IconGroup from './IconGroup';
const Scale = () => {
  return (
    <Wrapper>
     <div className="full-destop fade-in">
        <IconGroup Name=">1.000" projects={projects} />
        <IconGroup Name="10.000 mz" projects={projects} />
        <IconGroup Name="100.000 mz" projects={projects} />
        <IconGroup Name="<1.000.000" projects={projects} />
      </div>
    </Wrapper>
  )
}

export default Scale;