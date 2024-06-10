import React from 'react'
import Wrapper from '../styles/Projects'
import { arr, arr1 } from "../utils/constants"; 
import IconGroup from './IconGroup';
const Status = () => {
  return (
    <Wrapper>
     <div className="full-destop">
        <IconGroup Name="IDEA" arr={arr} />
        <IconGroup Name="INOVATION" arr={arr1} />
        <IconGroup Name="CUNSTRUCTION" arr={arr1} />
        <IconGroup Name="COMPLETE" arr={arr1} />
      </div>
    </Wrapper> 
  )
}

export default Status