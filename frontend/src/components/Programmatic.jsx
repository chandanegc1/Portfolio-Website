import React from 'react'
import Wrapper from '../styles/Projects'
import IconGroup from './IconGroup'
import {arr1 } from '../utils/constants'

const Programmatic = () => {
  return (
    <Wrapper>
     <div className="full-destop fade-in">
        <IconGroup Name="COMMERCIAL" arr={arr1} />
        <IconGroup Name="URBANISM" arr={arr1} />
        <IconGroup Name="PUBLIC SPACE" arr={arr1} />
        <IconGroup Name="CULTURE" arr={arr1} />
        <IconGroup Name="BODY CULTURE" arr={arr1} />
        <IconGroup Name="HEALTH" arr={arr1} />
        <IconGroup Name="EDUCATION" arr={arr1} />
        <IconGroup Name="HOUSING" arr={arr1} />
        <IconGroup Name="HOTEL" arr={arr1} />
        <IconGroup Name="MEDIA" arr={arr1} /> 
      </div>
    </Wrapper> 
  )
}

export default Programmatic