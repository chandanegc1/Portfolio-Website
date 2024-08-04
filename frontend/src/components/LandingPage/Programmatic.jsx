import React from 'react'
import Wrapper from '../../styles/Projects'
import IconGroup from './IconGroup'
import {projects } from '../../utils/constants'

const Programmatic = () => {
  return (
    <Wrapper>
     <div className="full-destop fade-in">
        <IconGroup Name="COMMERCIAL" projects={projects} />
        <IconGroup Name="URBANISM" projects={projects} />
        <IconGroup Name="PUBLIC SPACE" projects={projects} />
        <IconGroup Name="CULTURE" projects={projects} />
        <IconGroup Name="BODY CULTURE" projects={projects} />
        <IconGroup Name="HEALTH" projects={projects} />
        <IconGroup Name="EDUCATION" projects={projects} />
        <IconGroup Name="HOUSING" projects={projects} />
        <IconGroup Name="HOTEL" projects={projects} />
        <IconGroup Name="MEDIA" projects={projects} /> 
      </div>
    </Wrapper> 
  )
}

export default Programmatic