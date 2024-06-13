import React from 'react'
import Wrapper from '../styles/Projects'
import { arr, arr1 } from "../utils/constants"; 
import IconGroup from './IconGroup';
const Chronological = () => {
  return (
    <Wrapper>
     <div className="full-destop fade-in">
        <IconGroup Name="2001" arr={arr1} />
        <IconGroup Name="2000" arr={arr1} />
        <IconGroup Name="2000" arr={arr1} />
        <IconGroup Name="2000" arr={arr1} />
        <IconGroup Name="2000" arr={arr1} />
        <IconGroup Name="2000" arr={arr1} />
        <IconGroup Name="2000" arr={arr1} />
        <IconGroup Name="2000" arr={arr1} />
        <IconGroup Name="2000" arr={arr1} />
        <IconGroup Name="2000" arr={arr1} />
      </div>
    </Wrapper> 
  )
}

export default Chronological;